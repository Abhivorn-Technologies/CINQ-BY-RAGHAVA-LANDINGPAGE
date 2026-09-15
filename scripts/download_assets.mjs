import fs from 'fs';
import path from 'path';
import https from 'https';

const assets = [
  // Hero
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGjfcFK_lP6Km3TCYJap8-EGvRMKFeJM3LPh9Nr_w9DJg6mGHFUUseCzbkTeBx_S4VtrjxNRLrKDwz2e0Q9zY-TX7u5ipCHpf9FT1lMC2gdQv6vxStCOr4DHcWezDI_S23XEu4il2wZhK_xDipnA014gy6ItpkowLNjVxQbL5p7DyAFf5LuVCSk4sTOuUX9XQib4qWNu0GPko2mveSbHocq7mlEaMQhxW17oJ1qictDRJqUdv93BqJBg',
    dest: 'public/assets/hero/hero-towers-dusk.webp'
  },
  // Architecture / About
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOdUqmamt5m0DHz4LD1-vQu_MaNdAfHkHBNTgh4DNUvV1wQ27Zgo73SxJTqx8IgXykHoawimmGywAGGY3Vd1bx2EFauw9eRfGzP6rsUirqFQS_lqA-y-HWrGj7ebyu9dpmBmOP-Nl0A-iAucpSS2Yyzg4pt98X8KRAbars21P4EYJY5o-keUY1IKtPYWs4Tnk4QnxwN0_ge_4Bosj_Olg2YyvzjtcnB2ju0OKS27QOFclHKZ8zp6dnPg',
    dest: 'public/assets/architecture/cinq-towers-elevation.webp'
  },
  // Location
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMW2EOR3NtrvuZBYAxrTaRNaRDDnSSJcijs8VhyGiUcVKbrwBDBG7OwdRU8NxpLXr1vm9QYHhBRgaOukdJcAx7MYZyyiwFDqAvfw9VAG_PURpNM_ey3-dUoCjiQYgxtU-xNKyVM07qmQPDR_ozS7T5p4VYb1U5HBxUwLWWuXkJEWn0nu8YYejV0frHCWh8ZbyEhG7dgdQvMNTRcnKZsa8w1ZRkyYS_NlWHUsi5HqJcMHq9AJAs_Diu9Q',
    dest: 'public/assets/location/financial-district-map.webp'
  },
  // Grand Arrival
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2fMH-UGfVgRIWBErv3UQr_c-XvkelfqxsgiZ36lx6UN8ljG4ZNE-JPeHU3klLPrxK23LrWtB8LwuX-B03n_fVCMtYlpf2_u7zFHvvq2Yw5iBSW9NOLqXkMSms-XafP7BdWaXG-0oKdtANsww5tbNX4qqLPYTRUzCI5feRsW0x9G1WZsy76UlbeGwvOUmA5lQhu9lVD3KS3VZxnBqhfVIazYElqQyQOvLBrlC6MwkX6fTusqKrFOZRrw',
    dest: 'public/assets/architecture/grand-arrival.webp'
  },
  // Master Plan
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2z6BtYB8GsIfKXwrV3UXD2aXBUiEosKoqxlELFgEq0VzZO2nWp8hr9CzQx9OkjSJdOdyNLwSRQ3FZc3Hk06pyCIrW9q3mhKQFvoxAyQ_ejfUl1L-H1gQIP6Busrm34Rn5ak2Go4YBgN1RgI0KirKC_5SN_phzoOE3PaO42zzS0j2AZVEexYffWeUjt7iI3gloQ9T9zueV-flKT1grN0bZHXo7PVofqf1UAlvzC54-ql-RWJ3KvX6qNg',
    dest: 'public/assets/master-plan/master-plan-aerial.webp'
  },
  // Stilt Level Activities
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7Jw-LBE6ayW0nmRTUwGwhIj92tzFXQ-i1bvooFyQBEUmoKJxkcP7icSiFWA5NWbw8x-F8z65ahiRPW7hT0FAuoYloR2pIdFU1Qv-sgcKSfW1ahk6U2XjFWfwZuOancuz0l9taNZFMx6ve_0bVOvybUB38SH-5wNzjtkVf95chZENLsmOzLNINhTWcqnqQTRQbuAVvMVROLashUI_E59FZLgDCL0L30kzYF139wQg9BSJRk8AGMuR-gQ',
    dest: 'public/assets/stilt-level/tennis-court.webp'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAx5YUbPW-iew6KrvyL02cKktmyvwq2yL2HA9gLGRhE5MqPWL6GuuhC3iOTUai08RG2u_UDkNdjFwtSYWhoLczEKPmZvBQ0EK1d08VVciqIi6FfdzILZ9iS8YWhETIjIN5E7pMClNDHIiAPNQb0WkRwYXyqWk0qEXQLgIKmnW9jptf3MEi_6V8hjPYoHgUa-sq9OCnZKoqxPXqX-DPCXGwSVwgsl-MJaDMmji88UcQZyiPR4hKN7AxymQ',
    dest: 'public/assets/stilt-level/pet-garden.webp'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7i823PWZdhzHIZLke0N2pITKlbQlgvqrft9l66Iq3uPKzvnWKfA3os6e05qrOEC552r2Ze9-8SxDouxsbi0NhXlMXfPCGzkiQVMC6C8GS8KvERsF1-FajJ2-aKqx1C5KdltO98WJ5MNomtmZrsmcsrTAWG3HSHb_9PAskMIptXoOR4SuNUL1olpQ9N4Rc8ZRVOThBlg02t-5iFyIZuD51NO1FulZYA-doafvmzIGgGYVLsm_SrM99tA',
    dest: 'public/assets/stilt-level/play-area.webp'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXpH_cC52_BqcWj8JgONK0qHdbJyhLXZa1IAqf06UtLiPV-Z_FpIQRowxR3ylqlrGrZyUWoiJhpVUgUEOznOFEnZKl666Z4zdTbVc1vC62DDvTIq9nfk5EPZ-qVX6Ln1RHr67b2Tm5G9SsK2NHT7pe9vSNePt15IbyVzvFfB9Zl1r1sTE7tJZjx5CdbYRx4lJKfgE8UB8Hy-BAR3-ZngnCkLf1FATfC0sMlS23uQYBXIhp-Kedz1Qvvg',
    dest: 'public/assets/stilt-level/fitness-court.webp'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAANJoNohsAJoeRqxUThKNGXSlJZ_uGEx00vDRI-UNbUeIeb2SjE-_iCmhizn9LW7K3D7vRckcsP5t29ZETuaFrWAeHdpm5a8TXzPMEIyOCc3KKYOr2CwoH4ai2bQ4fYbnzgm2q-A4YmRZb-5utlwSC30DtBO013DUsbI4qUzzkpB-SfGjQZMG3QzlPUEMpb8kaNQgGDVK5IsXOFznnlTq_NG9inST6AS_Q3oxsVU4Btv4RZVbBb9afqA',
    dest: 'public/assets/stilt-level/basketball-court.webp'
  },
  // Tower Lounges
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9M7YILeATa_wWNSTQhj_tXJQWz7QT_aU9EFdoMxf-EGBU5lML3dolqAn821sDUJqMQrVfynDUs6qGtjmo2PC1InyNXIDxV3kAyxY4LWNe2e1TEHAemcEOO8-G_vGEqorGawpTin980ECKOygjhevPy7yP7kOrFFiCNciS4ikYks9ISqJbVOvAgPsUKJJAU3F2PhJfFFZOHX5xah_5ojqO6DGzRU9COFzKAKiC5bEJqIw1rWWMfQsBDQ',
    dest: 'public/assets/tower-lounges/tower1-multipurpose.webp'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBR2poJ24-XEz_TUK81DCCf9pj-QwJoEPJy--M5jdHywChod0YszYPftiX9FDyY4sKxSWmZofHk-pK0PuIxAe7TlGde2Kz0mdMMM8CBwiPo5JwgQCszFVS8USmKkR5-LFbP-rYrOqyBZF5nMmhOACI6HzdXwp3RYzGsoDoQptyT9U7VhWE1dvxvdmFWlMjcvgWrH-adxclcobBca7HldogeGnyTYOtV8lEKQURJ5NZznQRiNGTOce0Ufw',
    dest: 'public/assets/tower-lounges/tower2-business.webp'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJAFGM1w1YrEK8NWoMljLVflLIL3rRbT2NuHekhKHgGvFkhde3GO0F1pr3XTwbQ5qGAg5vWWukdTa_UQlARC1k5GDS_-TBLeegxK59Y1GIB847lVKJvKbM00LE0l_X9DUiXPr6H1I1LpIK5G0uWKrYYuiO475oBEZf2kkTaj6kWevLhFpoi3TE0VhOscZRDYaIHJjNyZGF11kHIYUWK9mZxBtcCx9340yuYmGni2pMrHQl-4Uyy_mITQ',
    dest: 'public/assets/tower-lounges/tower3-seniors.webp'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnd0-QnxR3wvGJjexAMvyN0g5rhkm1r3i0SW7PFSzBfcTmsq-vH_9uKA1j-5Xh9P2GE6Uh_Q5JXMetWKgz49Ci7r7Jdav5x7QOsmy6MUPbFNQnpc6R9QNh2SD0Vq629xnsFGJd_S2BofO_KtPumO7OqCmT_jejgfXVgUs8AAgMXdrNsFJ2w7sVBJOc_vNdQPbmw9Ke0Ye6tmS9BgcsCPJlbyVVZj7U368q4UpYF5NakkjHeqcx3yGWew',
    dest: 'public/assets/tower-lounges/tower4-teen.webp'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDioXhAD8JS2z3jTAwYJEsHsDzpkOeWFu2x0GsVwWqozoO-_XW-vBbPoXrN2WBrCMLWA4gQoXCinAJwYQyuU0raflqpFKLz3Ig_K3wK1uywN_BSCDLE1CzmnJ7Gyna3JhtYAt7qFLYppFQqY-hsu3BN2-GCKJEgP0RXXxEJnjJHCnlW7CxCs4Pc1sdv45NeZI26ppOKjfWAGKmIQslLfxAjVtp_0YkJCmnx4Nvx3NOaXL2yrPbtZdjxEw',
    dest: 'public/assets/tower-lounges/tower5-kids.webp'
  },
  // Clubhouse
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCODXOXkKGUVDFifnHU5Srw26sb3s9P6dTBSsGpWdZ7uqInNIFD9c1pUwKY99YgOIU7iSxgN4DXegRaRdeVezbPIL97DRyeNWjd_Rdnu7uqBSnRMXDW_94i7NfC7CHPpRDS5_-k-CJHqD0sIj3YcC0PM9HsYK6EtvSOUV3sNFuafKCW6V-0FtQFrx7RBxhMUpcSD7DazsSVRMiYp8MR2vdSMXo8e_qGLIjHRdU1MzHC46ImsksN1dwFYg',
    dest: 'public/assets/clubhouse/clubhouse-facade.webp'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhUQMFTsZ_ijmqh_LBPUflBxjR51lg8AsF_DL8UOvBoiw0uGxZkorcJdi46MnZ4M5EFGLgRRWV_7qD66mf9xN73mhPu96CByLwmbfXnl6HIzizDeWYRxX4qIwli5kMuYu40xfmt1Qe7NkSDcisD3bvbDxi3RfqcHm4TaB1R_ILtkR6OA1AboShsTF6BE3GZoFnSrDSu_l14ro-82701jO4F8krHag0Apvq7UYY6XNIg4L6TAnX1VJSGA',
    dest: 'public/assets/clubhouse/clubhouse-level4-lounge.webp'
  },
  // The Oasis
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSaNPdI1VWrpxrlmYqK1uBhAtGKYZLTzTt32Q61c0VkHsC0IYyPrYyILTOK9XatSjKi3ICfFzPTf-ArLV8XTBuVXp3FKT8HCFxpfpJygcnW2Fljw8VPJrrdgcM9ep7-XLvNA9hKW5AFUegHHNoJxoXRK-UuEESTtADWLrsp2sIOUP1Sq5QBvJjhVOUzRgObXBfRGOAkd4cAl-OB3IsNWJW0017BmZ6jTqR8NNdU-ch8F8cktjGk3JJ1A',
    dest: 'public/assets/oasis/sensory-playground.webp'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAl9PP2SodXfapfZzseGZfIehZTcw8wiGE_gm1wm8dtk9ygyJKvj5ClXHn7Tb6wcGqjQYllE_i3HX-IE_nKpxIuXZLkQpLzQ3NE4iDKCW4oNYQTL0e2xWciqQjFYUzOjH21lFrqszPRbrR1qxuNEpQMdd9A-ODCKk8C5efyGMfF83dKxNT-kjW9LW5lnovz6X11P1AUShg7Gg4G_cqCeN86r6FRwxJz3v_OzA0FRy410za4u-IooFJ8A',
    dest: 'public/assets/oasis/mountain-climbing.webp'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDda_bgq45B8G1FPlZk06Ua5wHDDzOLX5vHfsVWKNgftcYdGEiMZ-cNFdeCfC3kBdmjVrnilDrqiZc8LwVAF1tnqQYWoZWip2hr5JssiylaoSnc7KLwve-2ry4WQ1mEXod0uAq0wMgPLsMLRxvWpL3l_sZ0c3BriXuEOdS2p6hwzDJVnpuQs7r1cyPuvzmlZoo1L7jG8m5svoE5JZWnkDnkz0tN2r4RrgopgYaeHzMa-MWzkl5-GIUqIQ',
    dest: 'public/assets/oasis/senior-corner.webp'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAa2tWk067M7mzxsjGst9IV2BgZo5w5RMRlHKeC7kKFKuIAK4zXcAY0wDqn70ZflEWLRUBa1kgY9F9v55jx5D9pRPI7rVakJWw3o7kEumfIhHCuf8FBNtZg4SnqtV9zAZfUOpqO8-OBP36rkfEIiF9gACGTy1Ci8lEsJ9ufRey5LydJP0GQOA_Ox6-I9_VOPdTfn06ITsqmvVeWiCwjamA9WlbwJ3K5w46Ti6sfS6OF_TJrZnpBy-2T9A',
    dest: 'public/assets/oasis/jacuzzi-pooldeck.webp'
  },
  // Sky Lounge
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9Iwzme2a8SknATMAg9o1xqxYC2uAlO8g5FSuNlLq6UF2pn-M5Kxis31ezEIlqB8nr2FSKHjP3u3qb2rREIka5hePrQDblwmhkQmYHaDwQnqsMmcC2hhvSAsYgEfypI1BbvLRfwA0auB0ei-mXLsZUKkXcio5rzwYij361Hws_IhztdxzIHJWS8cxwmjr35b6JlxGHES3q3RTnRH4eTvk4HYbs3YfGpJ51yWsGssWMWG8sB6XQMejlOg',
    dest: 'public/assets/sky-lounge/sky-lounge-terrace.webp'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCeJWFls4dHk_VUp9rNbMabOr2oJwwvi1Kd4mNOYQG1KhNsp-YQZvcifE7QdbIZ1uRqY9aYgrWpkR4Pw18YU9qfDPj5EgZajLRzUc_Bo3LNtKUVKXEBGzQKVlHeeYGdimvNdMDEWgP-JX8EsV304yp-AKjRzB9ssuo5SPiPgonn0E-6I3gCM2Cim0i5MUODNylU9Fyk0OnuAAmUtCoyQ2dkPJ23_hU4iwalv3BXOzsjVDQdouyNCD_4-Q',
    dest: 'public/assets/sky-lounge/pickleball-arena.webp'
  },
  // Residences
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5xPOzG8qurcy8wSEOR0gEX7_xu4ABJCYAKtZNMjNZ0smG5UzZHUnrqG-ER2RljkkVvMwXVASJ1ClD29TWx9YuE-vnC2REi3xcUi68hYAdVCrSIFf8ZRKp55nQncUPpaIJsL4blj_eL4qDnGDkIjpwQmuOh3t8ZB1egKMv3GToVBGrBR5mbeEg-Z1aBWeXnRGma7rzPsbrjrwQeHUZgfh0Z2bYkiz-pJb4JgOCTFrTOjWbmA8tq8M5xQ',
    dest: 'public/assets/residences/master-bedroom.webp'
  }
];

async function download(url, dest) {
  const dir = path.dirname(dest);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      const fileStream = fs.createWriteStream(dest);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Downloaded: ${dest}`);
        resolve();
      });
      fileStream.on('error', (err) => {
        fs.unlink(dest, () => {});
        reject(err);
      });
    }).on('error', reject);
  });
}

async function run() {
  console.log('Downloading project assets...');
  for (const item of assets) {
    await download(item.url, item.dest);
  }
  console.log('All assets downloaded successfully.');
}

run();
