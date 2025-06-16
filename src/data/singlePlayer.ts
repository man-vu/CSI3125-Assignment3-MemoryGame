export const levels = [
  {
    title: 'Level 1',
    pairs: 4,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB1WIM2tagkLUN-9v4pJaiJXFUJyf5fsuryv_UjmfDiFVovv1c3CrCyJ_a5lKL7WRPxLmDLkwHtV7m33RyDVqV5Jn9kEOw4gBkyQW-YKewK4rgxR8KZ5SjlgHk-FeIETrCn2eO0_IwL82oBy7HEDYYIYUzxMV583h6GFu4xx9ZzVH25ClTzE6JWXZj7B0aRrtjNsvLb9NkdbNGhdrPq8GnH4-L5lBazugtXmdXYQ_iymtRPFxgogvac5uhurFYpTUue93yY4v_BUg3E',
  },
  {
    title: 'Level 2',
    pairs: 6,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD9O_xLbnuN_zhHw91fwMXwOMVXhTUzM1tu7xIF-Y333n5yAcb6Y9AaCfbEfi8bOfO_oi0S5rRT9HQcvFMb2VggNDiwakjUoNx53YSN9xx-UtFiQ9dpsPpNX-FORYZ286vv3w5fJi0AiyIe8RLiEiPMQAfoB-wGoNa3354jiWL0Zb0cI0a-Kq1WFB_eztk09DTBw6jHNkhZ-kJvCwUPXhq9BrzKzDbzLejyDm5NcwqDCLH_ORX8_ELKrZG7vuBSPwrbtl8tLG2QZ99S',
  },
  {
    title: 'Level 3',
    pairs: 8,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDXENHIoHKBCar1tHGsSqCY6Jyd9o2jd3SavWzTtHN8DzCzrkJm3Soxsm7YoT3ZZ9TulAPSLA0HK1ywEF4DO7UtmEGH9JZH5ITrcLXo_xlfC-Cn3xPPPfTmAuagu_vBijHRmPE8L14q4foXx62Q1G4AbJwMyHmtI34Kf_MjSp0eWl6jHtPjOEfUkwym74dZ3ALf2-XDnhGc1Fk78cprrJV3lM6hDCFrkQI6FGKP5fZrWl36Myejiici1YeNb9tq1X_bmXXhQAcQuKem',
  },
  {
    title: 'Level 4',
    pairs: 10,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAZgDiceSV_42efdh76iYWOAP_3iTy9M7IDTxJvMC_E4XDuRcWLSKf8-P84hGFeOVjUzaH1ZznwUiGh5GFBHuuT3jWXR8KYKqh7B1ShxhLwsEdO8pGa1gx0fDikei_stJ0LgxuidpPnbAS9EQmBQ4--vXgK2Cqy6tCDW_vNDuk3sglzyG0UtJClvnAVHo5XoNpczwAME5_SBk7rwTHoRBsK_sKoVdmchxSvSPom2FrRMRVwx5p3wF9jpVIMwwVnlhFX5FIN6UohhoUZ',
  },
  {
    title: 'Level 5',
    pairs: 12,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAWgjCZ3xCZN67cgYkQHtB1OON_FBRKNjfbHMt_jhQmOqcMAI2mVH3eSeY6xvc_WGLRXbx_bPSgZb2gHl2ISA1oy2aOtESYbC4jv43Er7QWrcMn_CxVpMR4r0v7XaqcL7GyGF_R-vIFnPT14K_Z6Kzs9WWJo7YolkPNfXIvIZ9ws0njh4uj8apDF_-0ekkVtL7eb9dP3HjyqTJdGMZBhJPJD36RlJEo0dJgBAFIZriat8E44j5_CzhNJdYiazeLKr-ykFWfErGbZqPp',
  },
  {
    title: 'Level 6',
    pairs: 15,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAlrht_-EFcQWrUiSRnx_zwx8fztL3y42ZDaw22xZbuWtzemhsrSokld0UqWGDmS00XcVNX2bMQQyjOHUyfLAIu58xEMNKojWAIRT020mzMgMt_eL1P8lD3WxGm7wGuETfnuja4NFL5Xgh9kWlbUK_AK7WJgUGcGwmt6refZLOvRxocexr0Lo-8zMb1SZgvnOm3KVZeoe5I4VjwpRJLZl7L_vvtL_DGFfYi5ehc6KzgdyeTnaheDveDWvdvENuyxm6QRxm7ivS-EZob',
  },
];

export const difficulties = ['Easy', 'Medium', 'Hard'] as const;
export type Difficulty = typeof difficulties[number];
