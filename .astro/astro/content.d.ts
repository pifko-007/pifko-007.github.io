declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"countries": {
"belarus.md": {
	id: "belarus.md";
  slug: "belarus";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".md"] };
"china.md": {
	id: "china.md";
  slug: "china";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".md"] };
"czech-republic.md": {
	id: "czech-republic.md";
  slug: "czech-republic";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".md"] };
"france.md": {
	id: "france.md";
  slug: "france";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".md"] };
"germany.md": {
	id: "germany.md";
  slug: "germany";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".md"] };
"iran.md": {
	id: "iran.md";
  slug: "iran";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".md"] };
"lithuania.md": {
	id: "lithuania.md";
  slug: "lithuania";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".md"] };
"poland.md": {
	id: "poland.md";
  slug: "poland";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".md"] };
"russia.md": {
	id: "russia.md";
  slug: "russia";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".md"] };
"slovakia.md": {
	id: "slovakia.md";
  slug: "slovakia";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".md"] };
"ukraine.md": {
	id: "ukraine.md";
  slug: "ukraine";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".md"] };
"united-kingdom.md": {
	id: "united-kingdom.md";
  slug: "united-kingdom";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".md"] };
"usa.md": {
	id: "usa.md";
  slug: "usa";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".md"] };
};
"organizations": {
"brics.md": {
	id: "brics.md";
  slug: "brics";
  body: string;
  collection: "organizations";
  data: InferEntrySchema<"organizations">
} & { render(): Render[".md"] };
"eug.md": {
	id: "eug.md";
  slug: "eug";
  body: string;
  collection: "organizations";
  data: InferEntrySchema<"organizations">
} & { render(): Render[".md"] };
"g20.md": {
	id: "g20.md";
  slug: "g20";
  body: string;
  collection: "organizations";
  data: InferEntrySchema<"organizations">
} & { render(): Render[".md"] };
"g7.md": {
	id: "g7.md";
  slug: "g7";
  body: string;
  collection: "organizations";
  data: InferEntrySchema<"organizations">
} & { render(): Render[".md"] };
"hamas.md": {
	id: "hamas.md";
  slug: "hamas";
  body: string;
  collection: "organizations";
  data: InferEntrySchema<"organizations">
} & { render(): Render[".md"] };
"hezbollah.md": {
	id: "hezbollah.md";
  slug: "hezbollah";
  body: string;
  collection: "organizations";
  data: InferEntrySchema<"organizations">
} & { render(): Render[".md"] };
"nato.md": {
	id: "nato.md";
  slug: "nato";
  body: string;
  collection: "organizations";
  data: InferEntrySchema<"organizations">
} & { render(): Render[".md"] };
"onz.md": {
	id: "onz.md";
  slug: "onz";
  body: string;
  collection: "organizations";
  data: InferEntrySchema<"organizations">
} & { render(): Render[".md"] };
"oubz.md": {
	id: "oubz.md";
  slug: "oubz";
  body: string;
  collection: "organizations";
  data: InferEntrySchema<"organizations">
} & { render(): Render[".md"] };
"sco.md": {
	id: "sco.md";
  slug: "sco";
  body: string;
  collection: "organizations";
  data: InferEntrySchema<"organizations">
} & { render(): Render[".md"] };
"ue.md": {
	id: "ue.md";
  slug: "ue";
  body: string;
  collection: "organizations";
  data: InferEntrySchema<"organizations">
} & { render(): Render[".md"] };
"wnp.md": {
	id: "wnp.md";
  slug: "wnp";
  body: string;
  collection: "organizations";
  data: InferEntrySchema<"organizations">
} & { render(): Render[".md"] };
"zbir.md": {
	id: "zbir.md";
  slug: "zbir";
  body: string;
  collection: "organizations";
  data: InferEntrySchema<"organizations">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
