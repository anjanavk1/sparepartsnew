export type Product = {
  id: string;
  name: string;
  brand: 'Mitsubishi' | 'Isuzu' | 'Toyota' | 'Nissan' | 'Hino' | 'UD' | 'Hyundai' | 'Kia';
  category: 'Castrol' | 'Shell' | 'ADNOC' | 'Total' | 'Zic' | 'Dufe';
  price?: number;
  image?: string;
  sku: string;
  condition: 'New' | 'Used';
};

export const products: Product[] = [
  { id: '1', name: 'Brake Pads', brand: 'Toyota', category: 'Castrol', sku: 'TY-BP-001', condition: 'New', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9B-bdcjfzqzYfvTXuxJnKkRIo5vTmuSricg&s' },
  { id: '2', name: 'Master Cylinder', brand: 'Mitsubishi', category: 'Castrol', sku: 'MI-MC-002', condition: 'New', image: 'https://m.media-amazon.com/images/I/71ygbgZqJBL.jpg' },
  { id: '3', name: 'Brake Discs', brand: 'Nissan', category: 'Castrol', sku: 'NS-BD-003', condition: 'New', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzLPcB798URVD2ASfv9hcXIpzubKVSXz6M8w&s' },
  { id: '4', name: 'Alternator V6', brand: 'Toyota', category: 'Shell', sku: 'TY-ALT-004', condition: 'New', image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=400&fit=crop' },
  { id: '5', name: 'Fuel Injectors', brand: 'Nissan', category: 'Shell', sku: 'NS-FI-005', condition: 'New', image: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=400&h=400&fit=crop' },
  { id: '6', name: 'Timing Belt', brand: 'Isuzu', category: 'Shell', sku: 'IS-TB-006', condition: 'New', image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&h=400&fit=crop' },
  { id: '7', name: 'Shock Absorbers', brand: 'Hyundai', category: 'ADNOC', sku: 'HY-SA-007', condition: 'New', image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=400&fit=crop' },
  { id: '8', name: 'Power Steering Pump', brand: 'Nissan', category: 'ADNOC', sku: 'NS-PSP-008', condition: 'New', image: '/products/power-steering-pump.png' },
  { id: '9', name: 'Control Arms', brand: 'Kia', category: 'ADNOC', sku: 'KA-CA-009', condition: 'New', image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=400&fit=crop' },
  { id: '10', name: 'Headlights LED', brand: 'Hino', category: 'Total', sku: 'HI-HL-010', condition: 'New', image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=400&h=400&fit=crop' },
  { id: '11', name: 'Spark Plugs', brand: 'Toyota', category: 'Total', sku: 'TY-SP-011', condition: 'New', image: 'https://images.unsplash.com/photo-1605816904861-b42f7d7c1f73?w=400&h=400&fit=crop' },
  { id: '12', name: 'Ignition Coil', brand: 'Mitsubishi', category: 'Total', sku: 'MI-IC-012', condition: 'New', image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=400&h=400&fit=crop' },
  { id: '13', name: 'Radiator', brand: 'UD', category: 'Zic', sku: 'UD-RAD-013', condition: 'New', image: 'https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?w=400&h=400&fit=crop' },
  { id: '14', name: 'Front Bumper', brand: 'Hyundai', category: 'Zic', sku: 'HY-FB-014', condition: 'New', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=400&fit=crop' },
  { id: '15', name: 'AC Compressor', brand: 'Kia', category: 'Zic', sku: 'KA-AC-015', condition: 'New', image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=400&fit=crop' },
  { id: '16', name: 'Tail Lights', brand: 'Isuzu', category: 'Dufe', sku: 'IS-TL-016', condition: 'New', image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=400&fit=crop' },
  { id: '17', name: 'Water Pump', brand: 'Hino', category: 'Dufe', sku: 'HI-WP-017', condition: 'New', image: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=400&h=400&fit=crop' },
  { id: '18', name: 'Battery', brand: 'UD', category: 'Dufe', sku: 'UD-BAT-018', condition: 'New', image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=400&h=400&fit=crop' },
];

