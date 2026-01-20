export type Product = {
  id: string;
  name: string;
  brand: 'Mitsubishi' | 'Isuzu' | 'Toyota' | 'Nissan' | 'Hino' | 'UD' | 'Hyundai' | 'Kia' | 'Honda';
  category: 'Castrol' | 'Shell' | 'ADNOC' | 'Total' | 'Zic' | 'Dufe' | 'BP' | 'Detex' | 'Spareparts';
  price?: number;
  image?: string;
  sku: string;
  condition: 'New' | 'Used';
  subcategory?: string;
};

export const products: Product[] = [
  // Toyota Products
  { id: '1', name: 'Spare Parts - RAV4', brand: 'Toyota', category: 'Castrol', sku: 'TY-RAV4-001', condition: 'New', image: '/vehicles/toyota-rav4.png' },
  { id: '4', name: 'Spare Parts - Land Cruiser', brand: 'Toyota', category: 'Shell', sku: 'TY-LC-004', condition: 'New', image: '/vehicles/toyota-landcruiser.png' },
  { id: '11', name: 'Spare Parts - Corolla', brand: 'Toyota', category: 'Total', sku: 'TY-COR-011', condition: 'New', image: '/vehicles/toyota-corolla.png' },

  // Mitsubishi Products
  { id: '2', name: 'Spare Parts - Attrage', brand: 'Mitsubishi', category: 'Castrol', sku: 'MI-ATR-002', condition: 'New', image: '/vehicles/mitsubishi-attrage.png' },
  { id: '12', name: 'Spare Parts - Outlander', brand: 'Mitsubishi', category: 'Total', sku: 'MI-OUT-012', condition: 'New', image: '/vehicles/mitsubishi-outlander.png' },
  { id: '12a', name: 'Spare Parts - Fuso', brand: 'Mitsubishi', category: 'Shell', sku: 'MI-FUSO-012A', condition: 'New', image: '/vehicles/mitsubishi-fuso.png' },

  // Nissan Products
  { id: '3', name: 'Spare Parts - X-Trail', brand: 'Nissan', category: 'Castrol', sku: 'NS-XT-003', condition: 'New', image: '/vehicles/nissan-xtrail.png' },
  { id: '5', name: 'Spare Parts - Truck', brand: 'Nissan', category: 'Shell', sku: 'NS-TK-005', condition: 'New', image: '/vehicles/nissan-truck.png' },
  { id: '8', name: 'Spare Parts - Patrol', brand: 'Nissan', category: 'ADNOC', sku: 'NS-PT-008', condition: 'New', image: '/vehicles/nissan-patrol.png' },
  { id: '8a', name: 'Spare Parts - Navara', brand: 'Nissan', category: 'Total', sku: 'NS-NAV-008A', condition: 'New', image: '/vehicles/nissan-navara.png' },

  // Isuzu Products
  { id: '6', name: 'Spare Parts - Isuzu Truck', brand: 'Isuzu', category: 'Shell', sku: 'IS-TK-006', condition: 'New', image: '/vehicles/isuzu-truck.png' },

  // Hino Products
  { id: '10', name: 'Spare Parts - Hino Dump', brand: 'Hino', category: 'Total', sku: 'HI-DP-010', condition: 'New', image: '/vehicles/hino-dump.png' },

  // Hyundai Products
  { id: '7', name: 'Spare Parts - Hyundai Sedan', brand: 'Hyundai', category: 'ADNOC', sku: 'HY-SD-007', condition: 'New', image: '/vehicles/hyundai-sedan.png' },

  // Kia Products
  { id: '9', name: 'Spare Parts - Kia Seltos', brand: 'Kia', category: 'ADNOC', sku: 'KA-SL-009', condition: 'New', image: '/vehicles/kia-seltos.png' },

  // UD Products (keeping existing)
  { id: '13', name: 'Spare Parts - UD Truck', brand: 'UD', category: 'Zic', sku: 'UD-TK-013', condition: 'New', image: '/vehicles/ud-truck.png' },

  // Batteries
  { id: '14', name: 'Detex Battery - Maintenance Free (NS40)', brand: 'Detex' as any, category: 'Detex', sku: 'DTX-BAT-NS40', condition: 'New', image: '/vehicles/detex-battery.png' },
  { id: '15', name: 'Detex Battery - Heavy Duty (N70)', brand: 'Detex' as any, category: 'Detex', sku: 'DTX-BAT-N70', condition: 'New', image: '/vehicles/detex-battery.png' },
  { id: '16', name: 'Detex Battery - Premium (N50)', brand: 'Detex' as any, category: 'Detex', sku: 'DTX-BAT-N50', condition: 'New', image: '/vehicles/detex-battery.png' },

  // Spareparts - Engine Parts
  { id: 'ep1', name: 'Engine Mount Bush', brand: 'Toyota', category: 'Spareparts', subcategory: 'Engine Parts', sku: 'SP-ENG-001', condition: 'New', image: '/products/engine-mount-bush.png' },
  { id: 'ep2', name: 'Engine Front Mounting', brand: 'Nissan', category: 'Spareparts', subcategory: 'Engine Parts', sku: 'SP-ENG-002', condition: 'New', image: '/products/engine-front-mounting.png' },
  { id: 'ep3', name: 'Timing Belt', brand: 'Mitsubishi', category: 'Spareparts', subcategory: 'Engine Parts', sku: 'SP-ENG-003', condition: 'New', image: '/categories/engine-parts.png' },
  { id: 'ep4', name: 'Engine Mounting', brand: 'Isuzu', category: 'Spareparts', subcategory: 'Engine Parts', sku: 'SP-ENG-004', condition: 'New', image: '/categories/engine-parts.png' },
  { id: 'ep5', name: 'Engine Mounting', brand: 'Honda', category: 'Spareparts', subcategory: 'Engine Parts', sku: 'SP-ENG-005', condition: 'New', image: '/categories/engine-parts.png' },
  { id: 'ep6', name: 'Engine Mounting', brand: 'Toyota', category: 'Spareparts', subcategory: 'Engine Parts', sku: 'SP-ENG-006', condition: 'New', image: '/categories/engine-parts.png' },

  // Spareparts - Suspension Parts
  { id: 'sp1', name: 'Link Rod', brand: 'Toyota', category: 'Spareparts', subcategory: 'Suspension Parts', sku: 'SP-SUS-001', condition: 'New', image: '/categories/suspension-parts.png' },
  { id: 'sp2', name: 'Suspension Ball Joint', brand: 'Nissan', category: 'Spareparts', subcategory: 'Suspension Parts', sku: 'SP-SUS-002', condition: 'New', image: '/categories/suspension-parts.png' },
  { id: 'sp3', name: 'Suspension Arm Bush', brand: 'Mitsubishi', category: 'Spareparts', subcategory: 'Suspension Parts', sku: 'SP-SUS-003', condition: 'New', image: '/categories/suspension-parts.png' },
  { id: 'sp4', name: 'Arm Suspension', brand: 'Isuzu', category: 'Spareparts', subcategory: 'Suspension Parts', sku: 'SP-SUS-004', condition: 'New', image: '/categories/suspension-parts.png' },
  { id: 'sp5', name: 'Suspension Rear Rod', brand: 'Honda', category: 'Spareparts', subcategory: 'Suspension Parts', sku: 'SP-SUS-005', condition: 'New', image: '/categories/suspension-parts.png' },
  { id: 'sp6', name: 'Suspension Bush', brand: 'Toyota', category: 'Spareparts', subcategory: 'Suspension Parts', sku: 'SP-SUS-006', condition: 'New', image: '/categories/suspension-parts.png' },

  // Spareparts - Multi Bush
  { id: 'mb1', name: 'TAB Upper Control Arm Bush', brand: 'Toyota', category: 'Spareparts', subcategory: 'Multi Bush', sku: 'SP-MB-001', condition: 'New', image: '/categories/multi-bush.png' },
  { id: 'mb2', name: 'TAB Lower Control Arm Bush', brand: 'Nissan', category: 'Spareparts', subcategory: 'Multi Bush', sku: 'SP-MB-002', condition: 'New', image: '/categories/multi-bush.png' },
  { id: 'mb3', name: 'Arm Bush', brand: 'Mitsubishi', category: 'Spareparts', subcategory: 'Multi Bush', sku: 'SP-MB-003', condition: 'New', image: '/categories/multi-bush.png' },
  { id: 'mb4', name: 'Bracket Bush', brand: 'Isuzu', category: 'Spareparts', subcategory: 'Multi Bush', sku: 'SP-MB-004', condition: 'New', image: '/categories/multi-bush.png' },
  { id: 'mb5', name: 'Control Arm Bushing', brand: 'Honda', category: 'Spareparts', subcategory: 'Multi Bush', sku: 'SP-MB-005', condition: 'New', image: '/categories/multi-bush.png' },
  { id: 'mb6', name: 'Differential Bush', brand: 'Toyota', category: 'Spareparts', subcategory: 'Multi Bush', sku: 'SP-MB-006', condition: 'New', image: '/categories/multi-bush.png' },

  // Spareparts - Wheel Assembly
  { id: 'wa1', name: 'Wheel Hub Bearing', brand: 'Toyota', category: 'Spareparts', subcategory: 'Wheel Assembly', sku: 'SP-WA-001', condition: 'New', image: '/categories/wheel-assembly.png' },
  { id: 'wa2', name: 'Wheel Bearing', brand: 'Nissan', category: 'Spareparts', subcategory: 'Wheel Assembly', sku: 'SP-WA-002', condition: 'New', image: '/categories/wheel-assembly.png' },
  { id: 'wa3', name: 'Centre Bearing', brand: 'Mitsubishi', category: 'Spareparts', subcategory: 'Wheel Assembly', sku: 'SP-WA-003', condition: 'New', image: '/categories/wheel-assembly.png' },
  { id: 'wa4', name: 'Dust Boot', brand: 'Isuzu', category: 'Spareparts', subcategory: 'Wheel Assembly', sku: 'SP-WA-004', condition: 'New', image: '/categories/wheel-assembly.png' },
  { id: 'wa5', name: 'Front Wheel Hub', brand: 'Honda', category: 'Spareparts', subcategory: 'Wheel Assembly', sku: 'SP-WA-005', condition: 'New', image: '/categories/wheel-assembly.png' },
  { id: 'wa6', name: 'Rear Wheel Bearing', brand: 'Toyota', category: 'Spareparts', subcategory: 'Wheel Assembly', sku: 'SP-WA-006', condition: 'New', image: '/categories/wheel-assembly.png' },

  // Spareparts - Steering System
  { id: 'ss1', name: 'TAB Ball Joints', brand: 'Toyota', category: 'Spareparts', subcategory: 'Steering System', sku: 'SP-SS-001', condition: 'New', image: '/categories/steering-system.png' },
  { id: 'ss2', name: 'TAB Tie Rod', brand: 'Nissan', category: 'Spareparts', subcategory: 'Steering System', sku: 'SP-SS-002', condition: 'New', image: '/categories/steering-system.png' },
  { id: 'ss3', name: 'Steering Boot', brand: 'Mitsubishi', category: 'Spareparts', subcategory: 'Steering System', sku: 'SP-SS-003', condition: 'New', image: '/categories/steering-system.png' },
  { id: 'ss4', name: 'Rack End', brand: 'Isuzu', category: 'Spareparts', subcategory: 'Steering System', sku: 'SP-SS-004', condition: 'New', image: '/categories/steering-system.png' },
  { id: 'ss5', name: 'Tie Rod Boot', brand: 'Honda', category: 'Spareparts', subcategory: 'Steering System', sku: 'SP-SS-005', condition: 'New', image: '/categories/steering-system.png' },
  { id: 'ss6', name: 'Axel Boot', brand: 'Toyota', category: 'Spareparts', subcategory: 'Steering System', sku: 'SP-SS-006', condition: 'New', image: '/categories/steering-system.png' },
];
