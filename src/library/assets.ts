/**
 * Curated Unsplash images for library components. Every URL was checked to
 * return 200 with `access-control-allow-origin: *`, which in-browser image
 * capture needs:
 *   curl -sI -H "Origin: https://example.com" <url>
 * Components paste the URL literally (they import nothing but React).
 */
export const IMAGES = {
  // Portraits
  portraitWomanAuburn: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
  portraitWomanSmile: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
  portraitWomanBlue: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80',
  portraitWomanGolden: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80',
  portraitWomanStudio: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80',
  portraitWomanDenim: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80',
  portraitManGrey: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
  portraitManBeard: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
  portraitManSmile: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  portraitManHat: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&q=80',

  // Products
  productSneakerRed: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
  productSneakerGrey: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&q=80',
  productHeadphones: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
  productWatchWhite: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
  productSmartwatch: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&q=80',
  productInstantCamera: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&q=80',
  productSunglasses: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80',
  productPerfume: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=800&q=80',

  // Scenes and workspaces
  officeBright: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1600&q=80',
  officeCorridor: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80',
  officeOpenPlan: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&q=80',
  teamAtTable: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80',
  deskOverhead: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&q=80',
  deskNotebook: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1600&q=80',
  laptopCode: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1600&q=80',
  laptopCodeDesk: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&q=80',
  laptopTyping: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1600&q=80',
  mountainsDawn: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80',
  hikerRidgeHaze: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600&q=80',
} as const
