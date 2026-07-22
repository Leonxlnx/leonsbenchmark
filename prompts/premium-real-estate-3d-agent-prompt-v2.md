# Premium Real Estate 3D Website — Creative Agent Prompt

Create a complete, production-ready website for a premium real estate company. The experience should feel like an interactive architectural film, not a normal webpage with a 3D background.

The main experience is a highly realistic luxury property in a striking natural environment. Scrolling should direct a cinematic camera journey through the landscape, toward the house, around the exterior, through the interior, and into a memorable final scene. Use this journey to present the company, services, selected properties, process, credibility, testimonials, contact information, and footer.

## Non-negotiable: use professional external assets

Do not build the final house, trees, furniture, landscape, pool, rocks, plants, materials, or interior details from basic shapes or simple procedural geometry. Primitive geometry may only be used temporarily for blocking the camera path.

Before creating the final experience, actively search for high-quality, legally usable external assets. Compare multiple options and select professional models, PBR materials, textures, HDR environments, vegetation, furniture, and architectural elements that share one coherent art direction. Prefer polished GLB/GLTF assets and optimized web-ready resources from reputable libraries or marketplaces.

Show the selected asset sources and licenses. Do not claim that assets were researched if they were not. Do not silently replace unavailable assets with crude boxes, generic trees, or low-quality placeholders. If external downloading is technically impossible, clearly explain that limitation and create an exact asset manifest and integration plan instead of pretending the primitive version is the final design.

The finished scene must look art-directed and premium. Imported assets should be adjusted through scale, placement, materials, lighting, color treatment, and optimization so they feel like one designed world rather than a random asset collection.

## Non-negotiable: text must exist inside the 3D world

Do not create a normal website where text overlays the canvas and slides upward as the user scrolls. Avoid generic bottom-to-top reveals, floating cards, centered text blocks, sticky overlay sections, repeated fades, and standard landing-page layouts.

The camera and architecture should reveal the content. Typography must feel physically or visually connected to the environment. For example, text may appear:

- across a window only when the reflection reaches the correct angle;
- projected by sunlight onto a wall or floor;
- engraved into stone, concrete, glass, or metal;
- reflected in the pool or lake;
- formed by shadows, landscape contours, light, or architectural lines;
- placed high above the property so the camera looks into the sky to read it;
- revealed through an anamorphic perspective that becomes readable from one camera position;
- integrated into artwork, signage, books, screens, furniture, or property models;
- uncovered as a door, curtain, panel, or lighting condition changes.

Use several genuinely different reveal ideas. Do not repeat one animation for every section. At key moments, slow or temporarily hold the camera so the user can understand the scene and read the content. Essential information must still have an accessible semantic HTML equivalent, but the visible presentation should remain spatial and cinematic.

Use expressive, high-quality typography with strong art direction. Explore distinctive editorial, architectural, serif, grotesk, or variable fonts with legal web licenses. The typography may become bold, unusual, or large when the scene supports it, but it must still feel sophisticated and readable. Do not default to generic startup fonts or use an eyebrow label above every heading.

## Creative direction

The website should feel realistic, cinematic, calm, expensive, original, and technically impressive. Aim for an award-level interactive experience rather than a generic luxury template or a Three.js demo.

Give the property a memorable concept and location. It may sit beside a lake, on a dramatic hillside, near a forest, or in another visually powerful setting. Include a complete exterior and interior, convincing landscaping, water, atmosphere, furniture, materials, reflections, glass, shadows, and environmental detail. No people or human characters should appear.

The camera movement should be carefully directed. Use approaches, pauses, close architectural details, wide reveals, changes in height, controlled rotations, and transitions between interior and exterior spaces. Avoid constant-speed movement, random orbiting, wall clipping, aggressive camera roll, motion sickness, and movement that feels like a game fly-through.

Subtle pointer interaction may add depth to the opening scene, reflections, vegetation, lighting, or camera perspective, but it should never overpower the scroll narrative.

## Business content and usability

Include the content expected from a complete real estate website: brand introduction, about, services, selected listings or projects, process, expertise or results, testimonials, calls to action, contact details, navigation, and legal/footer information.

Present these elements through the 3D journey rather than conventional stacked sections. The footer should be part of the final architectural or landscape composition, not a generic rectangle added below the canvas.

Keep navigation clear and allow users to jump to major parts of the journey. Support keyboard use, readable focus states, reduced motion, responsive layouts, touch devices, accessible content, and a lighter fallback for devices that cannot render the full scene smoothly.

## Visual and technical quality

Prioritize convincing lighting, realistic PBR materials, reflections, glass, water, atmosphere, contact shadows, texture scale, depth, composition, and subtle color grading. Avoid excessive bloom, neon glows, random gradients, floating UI pills, excessive rounded rectangles, generic icons, empty dark scenes, and effects used to hide weak assets.

Load the experience progressively and optimize external assets through compression, instancing, sensible texture sizes, level-of-detail choices, selective shadows, lazy loading, and adaptive quality. The final result must be a complete runnable website, not a mockup, storyboard, or unfinished visual experiment.

Before implementation, briefly state the chosen creative concept, camera journey, typography approach, and asset-search strategy. Then make strong independent decisions and build the full experience without repeatedly asking for approval.
