export interface SystemTemplate {
  code: string;
  name: string;
  lifetime: number;
  description: string;
}

export const SYSTEM_TEMPLATES: SystemTemplate[] = [
  {
    code: "A1010",
    name: "Standard Foundations",
    lifetime: 150,
    description: "Block and concrete foundation walls were observed around the building."
  },
  {
    code: "A101004",
    name: "Standard Foundations Repairs - Crack Injection",
    lifetime: 20,
    description: "This system crack injection is the preferred repair method for both cracks in horizontal concrete foundations, and vertical concrete surfaces. It also is used to eliminate moisture intrusion in cracks left from other foundation repairs."
  },
  {
    code: "A101004",
    name: "Standard Foundations Repairs - Damp proofing Repairs",
    lifetime: 20,
    description: "Block and concrete foundation walls were observed around the building sections were protected with a damproofing, sections were not protected with a damproofing."
  },
  {
    code: "A101004",
    name: "Standard Foundations Repairs - Parging repairs",
    lifetime: 20,
    description: "Block and concrete foundation walls were observed around the building protected with a cement parging."
  },
  {
    code: "A1030",
    name: "Slab on Grade",
    lifetime: 65,
    description: "The building substructure includes a structural slab on grade."
  },
  {
    code: "A2020",
    name: "Basement Walls",
    lifetime: 150,
    description: "Block and concrete foundation walls were observed around the building."
  },
  {
    code: "B1010",
    name: "Floor Construction - Structural Frame",
    lifetime: 150,
    description: "The structural system was observed to consist of a reinforced concrete frame work of columns, beams, slabs and corrugated shaped slabs. Steel beams were observed at slab edges."
  },
  {
    code: "B101008",
    name: "Floor Expansion Joints",
    lifetime: 20,
    description: "This system is designed to safely absorb the heat-induced expansion and contraction of construction materials, to absorb vibration, to hold parts together, or to allow movement due to ground settlement."
  },
  {
    code: "B101010",
    name: "Floor Construction - Autoclaved Aerated Concrete",
    lifetime: 30,
    description: "The observed areas featured Autoclaved Aerated Concrete (AAC) panels/blocks, a lightweight precast material known for its thermal insulation and fire resistance properties. The AAC elements were installed as part of the structural/enclosure system, possibly with a protective coating or finish."
  },
  {
    code: "B102010",
    name: "Roof Construction - Autoclaved Aerated Concrete",
    lifetime: 30,
    description: "Reinforced Autoclaved Aerated Concrete (RAAC) is a lightweight construction material used primarily in roofs, floors, and walls. Unlike standard concrete, it contains no aggregate, making it weaker and prone to deterioration over time."
  },
  {
    code: "B1030",
    name: "Structural Columns and Beams",
    lifetime: 100,
    description: "The structural system was observed to consist of a reinforced concrete frame work of columns and beams."
  },
  {
    code: "B201011",
    name: "Exterior Walls - Joint Sealant",
    lifetime: 12,
    description: "The building exterior was observed to be protected with sealants around openings, between dissimilar materials and in control joints."
  },
  {
    code: "B201012",
    name: "Exterior Walls - EIFS",
    lifetime: 35,
    description: "The exterior walls included an (EIFS) exterior insulation and finishing system."
  },
  {
    code: "B201013",
    name: "Exterior Walls - Glass block",
    lifetime: 25,
    description: "System is a translucent, hollow or solid block of glass for glazing openings or constructing partitions, usually square on the face, with the outer surfaces treated in any of various ways."
  },
  {
    code: "B201014",
    name: "Exterior Walls - Masonry Re-pointing",
    lifetime: 20,
    description: "The walls were observed to consist of exterior brick veneer wall and concrete masonry backup walls."
  },
  {
    code: "B201015",
    name: "Exterior Walls - Metal Siding",
    lifetime: 25,
    description: "The penthouse walls were observed to be constructed of metal siding."
  },
  {
    code: "B201016",
    name: "Exterior Walls - Precast Wall Panels",
    lifetime: 50,
    description: "Architectural concrete walls. The exterior walls were observed to be constructed of reinforced concrete as well as precast concrete panels protected with sealants."
  },
  {
    code: "B201017",
    name: "Exterior Walls - Stucco",
    lifetime: 25,
    description: "The exterior walls included an (EIFS) exterior insulation and finishing system."
  },
  {
    code: "B201018",
    name: "Exterior Walls - Vinyl Siding",
    lifetime: 20,
    description: "This system is plastic exterior siding used for decoration and weatherproofing, imitating wood clapboard, and used instead of other materials such as aluminum or fiber cement siding."
  },
  {
    code: "B201019",
    name: "Exterior Walls - Brick",
    lifetime: 50,
    description: "The majority of the building's exterior wall system is constructed of brick veneer. This system of repointing is the process of renewing the pointing (the external part of mortar joints) in masonry construction."
  },
  {
    code: "B201020",
    name: "Exterior Walls - Granular impregnated wall board",
    lifetime: 12,
    description: "Exterior brick veneer wall with granular impregnated wall board panels on metal furring and CMU backup walls."
  },
  {
    code: "B201021",
    name: "Exterior Walls - Curtain Wall System",
    lifetime: 50,
    description: "System is an outer covering of the building in which the outer walls are non-structural, but merely keep the weather out and the occupants in. As the curtain wall is non-structural it can be made of a lightweight material, reducing construction costs."
  },
  {
    code: "B2020",
    name: "Exterior Windows",
    lifetime: 32,
    description: "The original building windows were observed to be single glazed single sash as well as double sash double glazed installed in metal frames. The operable units were observed to be a vertical sliding style."
  },
  {
    code: "B202005",
    name: "Exterior Windows - Sealant Replacement",
    lifetime: 12,
    description: "Window assemblies would include caulking between the brick envelope and the window. If the caulking has failed, water will be able to infiltrate the exterior wall and degrade interior finishes."
  },
  {
    code: "B2030",
    name: "Exterior Doors - Hollow Metal",
    lifetime: 15,
    description: "Assemblies include exterior steel or aluminum hollow metal glazed and flush door leafs with finished steel or aluminum frames."
  },
  {
    code: "B2030",
    name: "Exterior Doors - Revolving Doors",
    lifetime: 15,
    description: "Three-wing & Four-wing type revolving door; manual, power-assisted operation. Includes door leafs, glazing, frame, mounting hardware."
  },
  {
    code: "B2030",
    name: "Exterior Doors - Wood/Aluminum Framed Glass Double Door",
    lifetime: 15,
    description: "The exterior doors and frames were observed to be aluminum with single glazing."
  },
  {
    code: "B203004",
    name: "Exterior Doors - Overhead and Roll-up",
    lifetime: 15,
    description: "Exterior painted overhead sectional doors were observed."
  },
  {
    code: "B203008",
    name: "Exterior Doors - Hardware",
    lifetime: 15,
    description: "Exterior door hardware was observed to consist of panic bars, push bars, kick plates, butt hinges, door pulls and aluminum thresholds."
  },
  {
    code: "B203009",
    name: "Exterior Doors - Barrier Free Hardware",
    lifetime: 15,
    description: "Accessibility compliant barrier-free hardware and associated work."
  },
  {
    code: "B3010",
    name: "Roof Coverings - Asphalt Shingled Roof",
    lifetime: 15,
    description: "Asphalt shingles were observed."
  },
  {
    code: "B3010",
    name: "Roof Coverings - BUR/EPDM/Inverted/Vinyl",
    lifetime: 22,
    description: "The roof areas noted were observed with conventional built up roof assemblies (BUR), with a pea gravel topcoat, possibly installed over insulation."
  },
  {
    code: "B3010",
    name: "Roof Coverings - Metal Roof Assembly System",
    lifetime: 22,
    description: "The roof assembly was observed to be a standing seam painted metal roof."
  },
  {
    code: "B302006",
    name: "Roof Openings - Skylight",
    lifetime: 22,
    description: "Aluminum framed skylights were observed."
  },
  {
    code: "B302006",
    name: "Roof Openings - Skylights Domed Acrylic",
    lifetime: 22,
    description: "Domed acrylic skylights were observed."
  },
  {
    code: "B308020",
    name: "Exterior Soffits",
    lifetime: 20,
    description: "Exposed ceiling surface of overhead building elements such as roof eaves, projecting or overhanging floors, and exposed floor surfaces."
  },
  {
    code: "C1010",
    name: "Partitions",
    lifetime: 75,
    description: "The interior partitions were observed to include plaster, gypsum board, brick and concrete block masonry units. Partitions around service rooms such as electrical rooms, gas fired boiler rooms are required to be fire separations with a fire resistance rating."
  },
  {
    code: "C101003",
    name: "Partitions - Moveable - Curtain Partition (GYM)",
    lifetime: 20,
    description: "A moveable gymnasium partition wall was observed. A manual folding accordion partition was observed located in the library."
  },
  {
    code: "C101003",
    name: "Partitions - Moveable - Foldable Partition (Classroom)",
    lifetime: 20,
    description: "Moveable folding partitions separating the teaching stations, classrooms were observed."
  },
  {
    code: "C101003",
    name: "Partitions - Moveable - Foldable Partition (GYM)",
    lifetime: 20,
    description: "Assemblies would include all retractable or folding partitions and associated work including tracks and anchoring systems."
  },
  {
    code: "C1020",
    name: "Interior Doors - Hollow Metal / Wood Single Door",
    lifetime: 25,
    description: "Interior doors were observed to include finished wood veneer solid core wood doors and painted metal doors hung in painted metal frames. Some doors were observed with Georgian wired glazing."
  },
  {
    code: "C102005",
    name: "Interior Doors - Overhead",
    lifetime: 20,
    description: "Exterior painted overhead sectional doors were observed."
  },
  {
    code: "C102007",
    name: "Interior Doors - Hardware",
    lifetime: 25,
    description: "Interior door hardware was observed to consist of push bars, knob handles, push plates, kick plates, butt hinges and door closers."
  },
  {
    code: "C102009",
    name: "Interior Doors - Barrier Free Hardware",
    lifetime: 15,
    description: "ADA-compliant barrier-free hardware and associated work."
  },
  {
    code: "C1030",
    name: "Fittings - Washroom",
    lifetime: 15,
    description: "Assemblies include individual compartments, cubicles, toilet partitions, urinal screens and washroom accessories."
  },
  {
    code: "C103001",
    name: "Fittings - Washroom Partitions - Urinal",
    lifetime: 10,
    description: "Assemblies include individual compartments, cubicles, toilet partitions, and urinal screens and other associated work."
  },
  {
    code: "C103001",
    name: "Fittings - Washroom Partitions - Water Closet",
    lifetime: 10,
    description: "Painted metal washroom partitions were observed in the building washrooms."
  },
  {
    code: "C103002",
    name: "Fittings - Washroom Accessories",
    lifetime: 15,
    description: "Washroom accessories include the following; individual compartments, soap, toilet roll, towel, and sanitary napkin dispensers, hand dryers, garbage bins and mirrors."
  },
  {
    code: "C103003",
    name: "Fittings - Chalk/White Boards",
    lifetime: 20,
    description: "A Chalkboard is a large board with a smooth, typically dark surface attached to a wall. The whiteboard is a wipeable board with a white surface that uses special markers to write with."
  },
  {
    code: "C103005",
    name: "Fittings - Lockers",
    lifetime: 35,
    description: "Metal lockers were observed in corridors."
  },
  {
    code: "C103009",
    name: "Fittings - Millwork - Classrooms",
    lifetime: 40,
    description: "Classroom millwork was observed to include wood cabinetry, and plastic laminate counters and countertops."
  },
  {
    code: "C103009",
    name: "Fittings - Millwork - Laboratories",
    lifetime: 40,
    description: "Classroom laboratory millwork was observed to include wood cabinetry, and plastic laminate counters and countertops."
  },
  {
    code: "C103013",
    name: "Fittings - Retractable Stage (Raised Access Floor)",
    lifetime: 25,
    description: "A motorized, retractable stage was observed in the gymnasium."
  },
  {
    code: "C103016",
    name: "Fittings - Bleachers",
    lifetime: 25,
    description: "Retractable wooden bleachers were observed in the double gymnasium."
  },
  {
    code: "C103017",
    name: "Fittings - Auditorium Seating",
    lifetime: 25,
    description: "Auditorium seating was observed to be padded."
  },
  {
    code: "C103018",
    name: "Fittings - Window Coverings",
    lifetime: 18,
    description: "System provides interior window coverings, associated hardware and controls at each exterior window and at any interior view window where privacy may be required."
  },
  {
    code: "C2010",
    name: "Stair Construction - Interior Ramps",
    lifetime: 40,
    description: "The interior ramps were observed to be integrated concrete with metal hand railings."
  },
  {
    code: "C2010",
    name: "Stair Construction - Metal framed and concrete framed",
    lifetime: 40,
    description: "The stairs were observed to be steel framed with cement treads and non slip nosing strips. Stairs include two flights and one landing."
  },
  {
    code: "C2020",
    name: "Stair Finishes - Anti-skid tape",
    lifetime: 10,
    description: "The stairs were observed to be steel framed with cement treads and non slip nosing strips."
  },
  {
    code: "C301002",
    name: "Wall Finishes - Plaster",
    lifetime: 15,
    description: "Interior painted wall finishes were observed to include, concrete block, plaster and gypsum wallboard surfaces."
  },
  {
    code: "C301003",
    name: "Wall Finishes - Gypsum",
    lifetime: 15,
    description: "Interior painted wall finishes were observed to include, concrete block, plaster and gypsum wallboard surfaces."
  },
  {
    code: "C301004",
    name: "Wall Finishes - Ceramic",
    lifetime: 15,
    description: "This assembly includes ceramic tile and associated work that are applied directly to an interior wall surface."
  },
  {
    code: "C301005",
    name: "Wall Finishes - Paint",
    lifetime: 5,
    description: "Interior painted wall finishes were observed to include concrete block, plaster and gypsum wallboard surfaces."
  },
  {
    code: "C301006",
    name: "Wall Finishes - Vinyl (Wall Paper)",
    lifetime: 15,
    description: "This assembly includes wall coverings and protective strips applied directly to an interior wall surface."
  },
  {
    code: "C301007",
    name: "Wall Finishes - Acoustic Panel",
    lifetime: 15,
    description: "Acoustic perforated wall panels were observed in the classrooms."
  },
  {
    code: "C301009",
    name: "Wall Finishes - Terrazzo",
    lifetime: 50,
    description: "Assemblies include cast and precast Terrazzo wall finishes, wall base and associated work."
  },
  {
    code: "C301011",
    name: "Wall Finishes - Quarry Tile",
    lifetime: 30,
    description: "Assemblies include quarry tile wall, wall base and associated work."
  },
  {
    code: "C301012",
    name: "Wall Finishes - Porcelain",
    lifetime: 30,
    description: "Thin set ceramic wall tiles were observed on washroom walls."
  },
  {
    code: "C301013",
    name: "Wall Finishes - Granite",
    lifetime: 75,
    description: "Assemblies include granite wall tile, wall base and associated work."
  },
  {
    code: "C301014",
    name: "Wall Finishes - Marble",
    lifetime: 75,
    description: "Assemblies include marble wall tile, wall base and associated work."
  },
  {
    code: "C301015",
    name: "Wall Finishes - Brick",
    lifetime: 75,
    description: "Assemblies include natural brick wall tile, wall base and associated work."
  },
  {
    code: "C301016",
    name: "Wall Finishes - Wood Panel",
    lifetime: 15,
    description: "This assembly includes interior wall finishes that include economy grade raised wood panelling."
  },
  {
    code: "C301017",
    name: "Wall Finishes - Stucco",
    lifetime: 15,
    description: "This system is a durable finish for interior usually composed of material made of an aggregate, a binder, and water and is applied while wet."
  },
  {
    code: "C301018",
    name: "Wall Finishes - Glazed",
    lifetime: 50,
    description: "System is a regular concrete block with a tile-like surface permanently fixed onto one or more faces. A composite of glass, pigments, and binder is injected or molded onto the surface of a cured concrete block, creating a glazed finished face."
  },
  {
    code: "C301019",
    name: "Wall Finishes - Waterproof Membrane",
    lifetime: 15,
    description: "The system includes sheet-applied polyethylene waterproofing membrane and vapor retarder."
  },
  {
    code: "C3020",
    name: "Floor Finishes - Raised Floor System",
    lifetime: 25,
    description: "System provides an elevated structural floor above a solid substrate (often a concrete slab) to create a hidden void for the passage of mechanical and electrical services."
  },
  {
    code: "C302001",
    name: "Floor Finishes - Ceramic",
    lifetime: 30,
    description: "Ceramic floor tiles were observed."
  },
  {
    code: "C302002",
    name: "Floor Finishes - Terrazzo",
    lifetime: 75,
    description: "Cast in place concrete terrazzo flooring with cove base was observed."
  },
  {
    code: "C302003",
    name: "Floor Finishes - Wood",
    lifetime: 20,
    description: "Hardwood flooring was observed in the gymnasium and on the stage."
  },
  {
    code: "C302004",
    name: "Floor Finishes - Vinyl Tile",
    lifetime: 15,
    description: "Vinyl composite floor tile was observed in the school."
  },
  {
    code: "C302005",
    name: "Floor Finishes - Carpet",
    lifetime: 10,
    description: "Carpet floor covering in was observed in the library and offices."
  },
  {
    code: "C302006",
    name: "Floor Finishes - Masonry and Stone",
    lifetime: 75,
    description: "A masonry and stone floor finishes were observed."
  },
  {
    code: "C302007",
    name: "Floor Finishes - Painted Sealed Concrete",
    lifetime: 15,
    description: "Assemblies include painted and stained concrete floor surfaces."
  },
  {
    code: "C302011",
    name: "Floor Finishes - Quarry Tile",
    lifetime: 30,
    description: "Assemblies include quarry tile flooring and wall base and associated work - largely located in corridors."
  },
  {
    code: "C302012",
    name: "Floor Finishes - Porcelain",
    lifetime: 30,
    description: "Porcelain tile floor finishes were observed."
  },
  {
    code: "C302013",
    name: "Floor Finishes - Granite",
    lifetime: 75,
    description: "Granite tile floor finishes were observed."
  },
  {
    code: "C302014",
    name: "Floor Finishes - Marble",
    lifetime: 75,
    description: "Marble tile floor finishes were observed."
  },
  {
    code: "C302015",
    name: "Floor Finishes - Vinyl Sheet",
    lifetime: 15,
    description: "Vinyl sheet was observed throughout the corridors."
  },
  {
    code: "C302016",
    name: "Floor Finishes - Rubber",
    lifetime: 20,
    description: "Rubber sheet goods were observed in the gymnasium."
  },
  {
    code: "C302017",
    name: "Floor Finishes - Composite",
    lifetime: 20,
    description: "Composite floor finishes were observed."
  },
  {
    code: "C302019",
    name: "Floor Finishes - Waterproof Membrane",
    lifetime: 20,
    description: "Assemblies include sealers and hardeners floor surfaces."
  },
  {
    code: "C302020",
    name: "Floor Finishes - Control Joints",
    lifetime: 25,
    description: "Assembly included expansion joint systems that are used to bridge the gap and restore building assembly functions while accommodating expected movements."
  },
  {
    code: "C302099",
    name: "Floor Finishes - Other",
    lifetime: 20,
    description: ""
  },
  {
    code: "C303002",
    name: "Ceiling Finishes - Plaster",
    lifetime: 30,
    description: "Lath and plaster ceilings with a paint finish were observed."
  },
  {
    code: "C303003",
    name: "Ceiling Finishes - Gypsum",
    lifetime: 30,
    description: "Gypsum ceilings with a paint finish were observed."
  },
  {
    code: "C303004",
    name: "Ceiling Finishes - Acoustic",
    lifetime: 25,
    description: "An acoustical suspended ceiling tile system was observed."
  },
  {
    code: "C303005",
    name: "Ceiling Finishes - Wood",
    lifetime: 50,
    description: "Wood ceilings with a paint finish were observed."
  },
  {
    code: "C303006",
    name: "Ceiling Finishes - Paint",
    lifetime: 15,
    description: "A painted finish was observed to the exposed ceiling structure."
  },
  {
    code: "C303008",
    name: "Ceiling Finishes - Metal",
    lifetime: 30,
    description: "Metal ceilings with a paint finish were observed."
  },
  {
    code: "G201003",
    name: "Roadways - Paved - Concrete Paved Roadway",
    lifetime: 25,
    description: "A concrete paved roadway and drop off area was observed."
  },
  {
    code: "G201003",
    name: "Roadways - Paved - Reconstruct Asphalt Paved Roadway",
    lifetime: 15,
    description: "An asphalt paved roadway and drop off area was observed."
  },
  {
    code: "G201003",
    name: "Roadways - Paved - Resurface Asphalt Paved Roadway",
    lifetime: 15,
    description: "An asphalt paved roadway and drop off area was observed at the front of the school."
  },
  {
    code: "G201010",
    name: "Roadways - Unpaved",
    lifetime: 10,
    description: "A gravel parking lot is situated along the school."
  },
  {
    code: "G202003",
    name: "Parking Lots - Paved - Reconstruct Asphalt Paved Parking Area",
    lifetime: 15,
    description: "An asphalt paved parking lot was observed."
  },
  {
    code: "G202003",
    name: "Parking Lots - Paved - Resurface Asphalt Paved Parking Area",
    lifetime: 15,
    description: "An asphalt paved parking lot was observed west of the school."
  },
  {
    code: "G202003",
    name: "Parking Lots - Paved - Concrete Paved",
    lifetime: 25,
    description: "A concrete paved parking lot was observed."
  },
  {
    code: "G202010",
    name: "Parking Lots - Unpaved",
    lifetime: 10,
    description: "Gravel parking lot situated along the south side of the school"
  },
  {
    code: "G203003",
    name: "Pedestrian Paving - Asphalt Paved Walkway",
    lifetime: 22,
    description: "Stone, concrete paving stone and asphalt paved playing areas, patios and sidewalks were observed situated around the perimeter of the building. Asphalt paved sidewalks were observed situated around the perimeter of the building."
  },
  {
    code: "G203003",
    name: "Pedestrian Paving - Concrete Paved Walkway",
    lifetime: 25,
    description: "Asphalt and concrete sidewalks were observed around the building."
  },
  {
    code: "G203003",
    name: "Pedestrian Paving - Concrete Stone Paved Walkway",
    lifetime: 20,
    description: "Sidewalk, cast-in-place concrete, 5 thick, 6x6- #10 mesh, broom finish with 2 sand bedding."
  },
  {
    code: "G203010",
    name: "Pedestrian Paving - Unpaved",
    lifetime: 10,
    description: "A grass playing field is provided on the back side of the building. The field includes soccer and play fields."
  },
  {
    code: "G204001",
    name: "Fencing and Gates - Chain Link Fence - 10 feet high",
    lifetime: 20,
    description: "A wrought iron fence was observed."
  },
  {
    code: "G204001",
    name: "Fencing and Gates - Chain Link Fence - 6 feet high",
    lifetime: 20,
    description: "Chain link fencing was observed situated around the perimeter of the property."
  },
  {
    code: "G204001",
    name: "Fencing and Gates - Chain Link Fence - 8 feet high",
    lifetime: 20,
    description: "A wrought iron fence was observed."
  },
  {
    code: "G204001",
    name: "Fencing and Gates - Wood Fence",
    lifetime: 20,
    description: "A retaining wall of flag stone was observed."
  },
  {
    code: "G204001",
    name: "Fencing and Gates - Wrought Iron Fencing",
    lifetime: 30,
    description: "A wrought iron fence was observed."
  },
  {
    code: "G204002",
    name: "Retaining Walls - Cast in Place",
    lifetime: 30,
    description: "A retaining wall of cast in place concrete was observed."
  },
  {
    code: "G204002",
    name: "Retaining Walls - Gabion",
    lifetime: 30,
    description: "Retaining walls and stepped retaining walls constructed of timbers and asphalt treads were observed."
  },
  {
    code: "G204002",
    name: "Retaining Walls - Precast Concrete Stone",
    lifetime: 30,
    description: "Retaining walls constructed of precast concrete stone were observed."
  },
  {
    code: "G204002",
    name: "Retaining Walls - Rail Ties",
    lifetime: 15,
    description: "Retaining walls and stepped retaining walls constructed of timbers and asphalt treads were observed."
  },
  {
    code: "G204005",
    name: "Signage - Illuminated double face",
    lifetime: 15,
    description: "Wall mounted building signage was observed. A freestanding sign was also observed."
  },
  {
    code: "G204005",
    name: "Signage - Non-Illuminated double face",
    lifetime: 15,
    description: "Wall mounted building signage was observed. A freestanding sign was also observed."
  },
  {
    code: "G204005",
    name: "Signage - Wall Mounted",
    lifetime: 15,
    description: "Wall mounted building signage was observed. A freestanding sign was also observed."
  },
  {
    code: "G204010",
    name: "Site Development - Exterior Stairs - Concrete Exterior Stairs",
    lifetime: 25,
    description: "Cast-in-place concrete stairs with and without metal railings were observed at various locations on the building exterior."
  },
  {
    code: "G204010",
    name: "Site Development - Exterior Stairs - Metal Exterior Stairs",
    lifetime: 25,
    description: "Exterior metal stairs with painted metal handrails were observed."
  },
  {
    code: "G204071",
    name: "Playing Fields - Artificial Turf",
    lifetime: 10,
    description: "Unpaved artificial turf playing fields were observed."
  },
  {
    code: "G204071",
    name: "Playing Fields - Soccer Field/Football/Baseball Diamond",
    lifetime: 10,
    description: "Unpaved sodded playing fields were observed."
  },
  {
    code: "G204072",
    name: "Playing Fields - Asphalt Running Track",
    lifetime: 22,
    description: "Asphalt paved tennis courts were observed. A cinder running track was observed. A crushed gravel running track was observed. An asphalt track was observed around the playing field."
  },
  {
    code: "G204072",
    name: "Playing Fields - Asphalt School Playground",
    lifetime: 22,
    description: "An asphalt paved playground was observed."
  },
  {
    code: "G204072",
    name: "Playing Fields - Rubberized Running Track",
    lifetime: 20,
    description: "An rubberized track was observed around the playing field."
  },
  {
    code: "G204099",
    name: "Site Development - Other - Precast Concrete Stone Decks",
    lifetime: 36,
    description: "Site Development includes 6 ft high chain link fencing with 2 post. Chain-link fencing exists around the extents of the property, as well as within the property, bounding play areas and separating the driveway/roadway from the parking area."
  },
  {
    code: "G204099",
    name: "Site Development - Other - Traffic Control Device",
    lifetime: 15,
    description: "Site Development includes 6 ft high chain link fencing with 2 post. Chain-link fencing exists around the extents of the property, as well as within the property, bounding play areas and separating the driveway/roadway from the parking area."
  },
  {
    code: "G204099",
    name: "Site Development - Other - Wood Decks",
    lifetime: 20,
    description: "Site Development includes 6 ft high chain link fencing with 2 post. Chain-link fencing exists around the extents of the property, as well as within the property, bounding play areas and separating the driveway/roadway from the parking area."
  },
  {
    code: "G2050",
    name: "Landscaping",
    lifetime: 5,
    description: "Landscaping was observed around the school perimeter. Large lawn spaces, mature deciduous and evergreen trees, and several areas of planted shrubs were observed."
  },
  {
    code: "B3010",
    name: "Roof Coverings - BUR/EPDM/Inverted/Vinyl",
    lifetime: 22,
    description: "The roof areas noted were observed with conventional built-up roof assemblies (BUR), with/without a pea gravel topcoat, possibly installed over insulation."
  },
  {
    code: "B3010",
    name: "Roof Coverings - Slopped",
    lifetime: 22,
    description: "The roof area is covered with the modified bitumen membrane."
  },
  {
    code: "B302006",
    name: "Roof Openings - Skylight",
    lifetime: 22,
    description: "Aluminum framed skylights were observed."
  },
  {
    code: "B3010",
    name: "Metal Roof Assembly System",
    lifetime: 22,
    description: "The roof assembly was observed to be a standing seam painted metal roof."
  }
];

export function findSystemTemplate(systemName: string): SystemTemplate | undefined {
  return SYSTEM_TEMPLATES.find(
    template => template.name.toLowerCase().includes(systemName.toLowerCase()) ||
      systemName.toLowerCase().includes(template.name.toLowerCase())
  );
}
