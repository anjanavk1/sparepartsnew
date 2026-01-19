export type Product = {
  id: string;
  name: string;
  brand: 'Mitsubishi' | 'Isuzu' | 'Toyota' | 'Nissan' | 'Hino' | 'UD' | 'Hyundai' | 'Kia';
  category: 'Castrol' | 'Shell' | 'ADNOC' | 'Total' | 'Zic' | 'Dufe' | 'BP' | 'Detex' | 'Spareparts';
  price?: number;
  image?: string;
  sku: string;
  condition: 'New' | 'Used';
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
  { id: '14', name: 'Detex Battery - Maintenance Free', brand: 'Detex' as any, category: 'Detex', sku: 'DTX-BAT-001', condition: 'New', image: '/vehicles/detex-battery.png' },
];
