import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const baseSchema = ({ image }) =>
	z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: image().optional(),
		keyPoints: z.array(z.string()).optional(),
		category: z.enum(['engagement', 'trending', 'rings', 'cultural']).optional(),
	});

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: baseSchema,
});

const rings = defineCollection({
	// Load Markdown and MDX files in the `src/content/rings/` directory.
	loader: glob({ base: './src/content/rings', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: baseSchema,
});

const anniversaries = defineCollection({
	// Load Markdown and MDX files in the `src/content/anniversaries/` directory.
	loader: glob({ base: './src/content/anniversaries', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: baseSchema,
});

export const collections = { blog, rings, anniversaries };
