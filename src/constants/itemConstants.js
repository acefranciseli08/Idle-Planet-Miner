// @ts-check

// Normalized item definitions. Sub-requirements reference other items by `key`.
export const ITEMS_MAP = {
  COPPER_BAR: { key: 'COPPER_BAR', name: 'Copper Bar', requirements: [] },
  IRON_BAR: { key: 'IRON_BAR', name: 'Iron Bar', requirements: [] },
  LEAD_BAR: { key: 'LEAD_BAR', name: 'Lead Bar', requirements: [] },
  SILICON_BAR: { key: 'SILICON_BAR', name: 'Silicon Bar', requirements: [] },
  ALUMINUM_BAR: { key: 'ALUMINUM_BAR', name: 'Aluminum Bar', requirements: [] },
  GOLD_BAR: { key: 'GOLD_BAR', name: 'Gold Bar', requirements: [] },
  SILVER_BAR: { key: 'SILVER_BAR', name: 'Silver Bar', requirements: [] },
  BRONZE_BAR: { key: 'BRONZE_BAR', name: 'Bronze Bar', requirements: [
    { key: 'COPPER_BAR', quantity: 5 },
    { key: 'SILVER_BAR', quantity: 1 },
  ] },
  STEEL_BAR: { key: 'STEEL_BAR', name: 'Steel Bar', requirements: [
    { key: 'IRON_BAR', quantity: 15 },
    { key: 'LEAD_BAR', quantity: 8 },
  ] },
  PLATINUM_BAR: { key: 'PLATINUM_BAR', name: 'Platinum Bar', requirements: [
    { key: 'GOLD_BAR', quantity: 1 },
  ] },
  TITANIUM_BAR: { key: 'TITANIUM_BAR', name: 'Titanium Bar', requirements: [
    { key: 'BRONZE_BAR', quantity: 1 },
  ] },
  IRIDIUM_BAR: { key: 'IRIDIUM_BAR', name: 'Iridium Bar', requirements: [
    { key: 'STEEL_BAR', quantity: 1 },
  ] },
  PALADIUM_BAR: { key: 'PALADIUM_BAR', name: 'Paladium Bar', requirements: [
    { key: 'PLATINUM_BAR', quantity: 1 },
  ] },
  OSMIUM_BAR: { key: 'OSMIUM_BAR', name: 'Osmium Bar', requirements: [
    { key: 'TITANIUM_BAR', quantity: 1 },
  ] },
  RHODIUM_BAR: { key: 'RHODIUM_BAR', name: 'Rhodium Bar', requirements: [
    { key: 'IRIDIUM_BAR', quantity: 1 },
  ] },

  COPPER_WIRE: {
    key: 'COPPER_WIRE',
    name: 'Copper Wire',
    requirements: [{ key: 'COPPER_BAR', quantity: 2 }],
  },

  IRON_NAIL: {
    key: 'IRON_NAIL',
    name: 'Iron Nail',
    requirements: [{ key: 'IRON_BAR', quantity: 2 }],
  },

  BATTERY: {
    key: 'BATTERY',
    name: 'Battery',
    requirements: [
      { key: 'COPPER_WIRE', quantity: 1 },
      { key: 'COPPER_BAR', quantity: 5 },
    ],
  },

  HAMMER: {
    key: 'HAMMER',
    name: 'Hammer',
    requirements: [
      { key: 'IRON_NAIL', quantity: 1 },
      { key: 'LEAD_BAR', quantity: 2 },
    ],
  },

  GLASS: {
    key: 'GLASS',
    name: 'Glass',
    requirements: [{ key: 'SILICON_BAR', quantity: 5 }],
  },

  CIRCUIT: {
    key: 'CIRCUIT',
    name: 'Circuit',
    requirements: [
      { key: 'SILICON_BAR', quantity: 2 },
      { key: 'COPPER_WIRE', quantity: 5 },
      { key: 'ALUMINUM_BAR', quantity: 2 },
    ],
  },

  LENS: {
    key: 'LENS',
    name: 'Lens',
    requirements: [
      { key: 'GLASS', quantity: 1 },
      { key: 'SILVER_BAR', quantity: 2 },
    ],
  },

  LASER: {
    key: 'LASER',
    name: 'Laser',
    requirements: [
      { key: 'GOLD_BAR', quantity: 2 },
      { key: 'LENS', quantity: 1 },
      { key: 'IRON_BAR', quantity: 5 },
    ],
  },

  BASIC_COMPUTER: {
    key: 'BASIC_COMPUTER',
    name: 'Basic Computer',
    requirements: [
      { key: 'SILVER_BAR', quantity: 2 },
      { key: 'CIRCUIT', quantity: 2 },
    ],
  },

  SOLAR_PANEL: { 
    key: 'SOLAR_PANEL', 
    name: 'Solar Panel', 
    requirements: [
      { key: 'CIRCUIT', quantity: 2 },
      { key: 'GLASS', quantity: 5 },
    ] 
  },

  LASER_TORCH: {
    key: 'LASER_TORCH',
    name: 'Laser Torch',
    requirements: [
      { key: 'LASER', quantity: 1 },
      { key: 'LENS', quantity: 2 },
      { key: 'BRONZE_BAR', quantity: 2 },
    ],
  },

  ADVANCE_BATTERY: {
    key: 'ADVANCE_BATTERY',
    name: 'Advance Battery',
    requirements: [
      { key: 'BATTERY', quantity: 15 },
      { key: 'STEEL_BAR', quantity: 10 },
    ],
  },

  THERMAL_SCANNER: {
    key: 'THERMAL_SCANNER',
    name: 'Thermal Scanner',
    requirements: [
      { key: 'GLASS', quantity: 2 },
      { key: 'LASER', quantity: 1 },
      { key: 'PLATINUM_BAR', quantity: 2 },
    ],
  },

  ADVANCED_COMPUTER: {
    key: 'ADVANCED_COMPUTER',
    name: 'Advanced Computer',
    requirements: [
      { key: 'BASIC_COMPUTER', quantity: 2},
      { key: 'TITANIUM_BAR', quantity: 2 },
    ],
  },

  NAVIGATION_MODULE: {
    key: 'NAVIGATION_MODULE',
    name: 'Navigation Module',
    requirements: [
      { key: 'THERMAL_SCANNER', quantity: 1 },
      { key: 'LASER_TORCH', quantity: 1 },
    ],
  },

  PLASMA_TORCH: {
    key: 'PLASMA_TORCH',
    name: 'Plasma Torch',
    requirements: [
      { key: 'LASER_TORCH', quantity: 2 },
      { key: 'IRIDIUM_BAR', quantity: 6 },
    ],
  },

  RADIO_TOWER: {
    key: 'RADIO_TOWER',
    name: 'Radio Tower',
    requirements: [
      { key: 'PLATINUM_BAR', quantity: 30 },
      { key: 'ALUMINUM_BAR', quantity: 60 },
      { key: 'TITANIUM_BAR', quantity: 20 },
    ],
  },

  TELESCOPE: {
    key: 'TELESCOPE',
    name: 'Telescope',
    requirements: [
      { key: 'LENS', quantity: 8 },
      { key: 'ADVANCED_COMPUTER', quantity: 1 },
    ],
  },

  SATELLITE_DISH: {
    key: 'SATELLITE_DISH',
    name: 'Satellite Dish',
    requirements: [
      { key: 'STEEL_BAR', quantity: 60 },
      { key: 'PALADIUM_BAR', quantity: 12 },
    ],
  },

  MOTOR: {
    key: 'MOTOR',
    name: 'Motor',
    requirements: [
      { key: 'BRONZE_BAR', quantity: 200 },
      { key: 'HAMMER', quantity: 80 },
    ],
  },

  ACCUMULATOR: {
    key: 'ACCUMULATOR',
    name: 'Accumulator',
    requirements: [
      { key: 'ADVANCE_BATTERY', quantity: 1 },
      { key: 'OSMIUM_BAR', quantity: 8 },
    ],
  },

  NUCLEAR_CAPSULE: {
    key: 'NUCLEAR_CAPSULE',
    name: 'Nuclear Capsule',
    requirements: [
      { key: 'RHODIUM_BAR', quantity: 2 },
      { key: 'PLASMA_TORCH', quantity: 1 },
    ],
  },

  WIND_TURBINE: {
    key: 'WIND_TURBINE',
    name: 'Wind Turbine',
    requirements: [
      { key: 'ALUMINUM_BAR', quantity: 120 },
      { key: 'MOTOR', quantity: 1 },
    ],
  },

  SPACE_PROBE: {
    key: 'SPACE_PROBE',
    name: 'Space Probe',
    requirements: [
      { key: 'SATELLITE_DISH', quantity: 1 },
      { key: 'SOLAR_PANEL', quantity: 10 },
      { key: 'TELESCOPE', quantity: 1 },
    ],
  },
}

export const ITEM_LIST = Object.values(ITEMS_MAP)
