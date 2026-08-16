import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };


type PickContentRelationshipFieldData<
	TRelationship extends prismic.CustomTypeModelFetchCustomTypeLevel1 | prismic.CustomTypeModelFetchCustomTypeLevel2 | prismic.CustomTypeModelFetchGroupLevel1 | prismic.CustomTypeModelFetchGroupLevel2,
	TData extends Record<string, prismic.AnyRegularField | prismic.GroupField | prismic.NestedGroupField | prismic.SliceZone>,
	TLang extends string
> = |
	// Content relationship fields
	{
		[TSubRelationship in Extract<
			TRelationship["fields"][number], prismic.CustomTypeModelFetchContentRelationshipLevel1
		> as TSubRelationship["id"]]:
			ContentRelationshipFieldWithData<TSubRelationship["customtypes"], TLang>;
	} &
	// Group
	{
		[TGroup in Extract<
			TRelationship["fields"][number], prismic.CustomTypeModelFetchGroupLevel1 | prismic.CustomTypeModelFetchGroupLevel2
		> as TGroup["id"]]:
			TData[TGroup["id"]] extends prismic.GroupField<infer TGroupData>
				? prismic.GroupField<PickContentRelationshipFieldData<TGroup, TGroupData, TLang>>
				: never
	} &
	// Other fields
	{
		[TFieldKey in Extract<TRelationship["fields"][number], string>]:
			TFieldKey extends keyof TData ? TData[TFieldKey] : never;
	};

type ContentRelationshipFieldWithData<
	TCustomType extends readonly (prismic.CustomTypeModelFetchCustomTypeLevel1 | string)[] | readonly (prismic.CustomTypeModelFetchCustomTypeLevel2 | string)[],
	TLang extends string = string
> = {
	[ID in Exclude<TCustomType[number], string>["id"]]:
		prismic.ContentRelationshipField<
			ID,
			TLang,
			PickContentRelationshipFieldData<
				Extract<TCustomType[number], { id: ID }>,
				Extract<prismic.Content.AllDocumentTypes, { type: ID }>["data"],
				TLang
			>
		>
}[Exclude<TCustomType[number], string>["id"]];

type HomepageDocumentDataSlicesSlice = HeroSectionSlice

/**
 * Item in *homepage → portfolio-imgs*
 */
export interface HomepageDocumentDataPortfolioImgsItem {
	/**
	 * img1 field in *homepage → portfolio-imgs*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: homepage.portfolio_imgs[].img1
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	img1: prismic.ImageField<never>;
	
	/**
	 * img2 field in *homepage → portfolio-imgs*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: homepage.portfolio_imgs[].img2
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	img2: prismic.ImageField<never>;
	
	/**
	 * img3 field in *homepage → portfolio-imgs*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: homepage.portfolio_imgs[].img3
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	img3: prismic.ImageField<never>;
	
	/**
	 * img4 field in *homepage → portfolio-imgs*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: homepage.portfolio_imgs[].img4
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	img4: prismic.ImageField<never>;
	
	/**
	 * img5 field in *homepage → portfolio-imgs*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: homepage.portfolio_imgs[].img5
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	img5: prismic.ImageField<never>;
	
	/**
	 * img6 field in *homepage → portfolio-imgs*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: homepage.portfolio_imgs[].img6
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	img6: prismic.ImageField<never>;
	
	/**
	 * img7 field in *homepage → portfolio-imgs*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: homepage.portfolio_imgs[].img7
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	img7: prismic.ImageField<never>;
	
	/**
	 * img8 field in *homepage → portfolio-imgs*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: homepage.portfolio_imgs[].img8
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	img8: prismic.ImageField<never>;
	
	/**
	 * img9 field in *homepage → portfolio-imgs*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: homepage.portfolio_imgs[].img9
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	img9: prismic.ImageField<never>;
	
	/**
	 * img10 field in *homepage → portfolio-imgs*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: homepage.portfolio_imgs[].img10
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	img10: prismic.ImageField<never>;
}

/**
 * Item in *homepage → social-links*
 */
export interface HomepageDocumentDataSocialLinksItem {
	/**
	 * instagram field in *homepage → social-links*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: homepage.social_links[].instagram
	 * - **Documentation**: https://prismic.io/docs/fields/link
	 */
	instagram: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;
	
	/**
	 * what field in *homepage → social-links*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: homepage.social_links[].what
	 * - **Documentation**: https://prismic.io/docs/fields/link
	 */
	what: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;
	
	/**
	 * email field in *homepage → social-links*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: homepage.social_links[].email
	 * - **Documentation**: https://prismic.io/docs/fields/link
	 */
	email: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;
}

/**
 * Content for homepage documents
 */
interface HomepageDocumentData {
	/**
	 * Slice Zone field in *homepage*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: homepage.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/slices
	 */
	slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice>;/**
	 * hero-image field in *homepage*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: homepage.hero_image
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	hero_image: prismic.ImageField<never>;
	
	/**
	 * bio-description field in *homepage*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: homepage.bio_description
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	bio_description: prismic.KeyTextField;
	
	/**
	 * profile-img field in *homepage*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: homepage.profile_img
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	profile_img: prismic.ImageField<never>;
	
	/**
	 * portfolio-imgs field in *homepage*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: homepage.portfolio_imgs[]
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/fields/repeatable-group
	 */
	portfolio_imgs: prismic.GroupField<Simplify<HomepageDocumentDataPortfolioImgsItem>>;
	
	/**
	 * info-location field in *homepage*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: homepage.info_location
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	info_location: prismic.KeyTextField;
	
	/**
	 * map-location field in *homepage*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: homepage.map_location
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	map_location: prismic.ImageField<never>;
	
	/**
	 * social-links field in *homepage*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: homepage.social_links[]
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/fields/repeatable-group
	 */
	social_links: prismic.GroupField<Simplify<HomepageDocumentDataSocialLinksItem>>;
}

/**
 * homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/content-modeling
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<Simplify<HomepageDocumentData>, "homepage", Lang>;

/**
 * Item in *Profile → Links*
 */
export interface ProfileDocumentDataLinksItem {
	/**
	 * Title field in *Profile → Links*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: profile.links[].title
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	title: prismic.KeyTextField;
	
	/**
	 * Url field in *Profile → Links*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: profile.links[].url
	 * - **Documentation**: https://prismic.io/docs/fields/link
	 */
	url: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;
}

/**
 * Item in *Profile → Socials*
 */
export interface ProfileDocumentDataSocialsItem {
	/**
	 * Platform field in *Profile → Socials*
	 *
	 * - **Field Type**: Select
	 * - **Placeholder**: *None*
	 * - **Default Value**: github
	 * - **API ID Path**: profile.socials[].platform
	 * - **Documentation**: https://prismic.io/docs/fields/select
	 */
	platform: prismic.SelectField<"github" | "linkedin" | "whatsapp" | "email", "filled">;
	
	/**
	 * Url field in *Profile → Socials*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: profile.socials[].url
	 * - **Documentation**: https://prismic.io/docs/fields/link
	 */
	url: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;
}

/**
 * Content for Profile documents
 */
interface ProfileDocumentData {
	/**
	 * Name field in *Profile*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: profile.name
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	name: prismic.KeyTextField;
	
	/**
	 * Bio field in *Profile*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: profile.bio
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	bio: prismic.KeyTextField;
	
	/**
	 * Avatar field in *Profile*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: profile.avatar
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	avatar: prismic.ImageField<never>;
	
	/**
	 * Links field in *Profile*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: profile.links[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/repeatable-group
	 */
	links: prismic.GroupField<Simplify<ProfileDocumentDataLinksItem>>;
	
	/**
	 * Socials field in *Profile*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: profile.socials[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/repeatable-group
	 */
	socials: prismic.GroupField<Simplify<ProfileDocumentDataSocialsItem>>;
}

/**
 * Profile document from Prismic
 *
 * - **API ID**: `profile`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/content-modeling
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProfileDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<Simplify<ProfileDocumentData>, "profile", Lang>;

export type AllDocumentTypes = HomepageDocument | ProfileDocument;

/**
 * Default variation for HeroSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slices
 */
export type HeroSectionSliceDefault = prismic.SharedSliceVariation<"default", Record<string, never>, never>;

/**
 * Slice variation for *HeroSection*
 */
type HeroSectionSliceVariation = HeroSectionSliceDefault

/**
 * HeroSection Shared Slice
 *
 * - **API ID**: `hero_section`
 * - **Description**: HeroSection
 * - **Documentation**: https://prismic.io/docs/slices
 */
export type HeroSectionSlice = prismic.SharedSlice<"hero_section", HeroSectionSliceVariation>;

declare module "@prismicio/client" {
	interface CreateClient {
		(repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
	}
	
	interface CreateWriteClient {
		(repositoryNameOrEndpoint: string, options: prismic.WriteClientConfig): prismic.WriteClient<AllDocumentTypes>;
	}
	
	interface CreateMigration {
		(): prismic.Migration<AllDocumentTypes>;
	}
	
	namespace Content {
		export type {
			HomepageDocument,
			HomepageDocumentData,
			HomepageDocumentDataSlicesSlice,
			HomepageDocumentDataPortfolioImgsItem,
			HomepageDocumentDataSocialLinksItem,
			ProfileDocument,
			ProfileDocumentData,
			ProfileDocumentDataLinksItem,
			ProfileDocumentDataSocialsItem,
			AllDocumentTypes,
			HeroSectionSlice,
			HeroSectionSliceVariation,
			HeroSectionSliceDefault
		}
	}
}