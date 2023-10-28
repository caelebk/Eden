export interface Profile {
    country: string,
    display_name: string,
    explicit_content: ExplicitContent,
    external_urls: ExternalUrl,
    followers: Followers,
    href: string,
    id: string,
    images: Image[],
    product: string,
    type: string,
    uri: string,
}

export interface ExplicitContent {
    filter_enabled: boolean,
    filter_locked: boolean
}

export interface ExternalUrl {
    spotify: string
}

export interface Image {
  url: string,
  height: number,
  width: number
}

export interface Followers {
    href: string | null,
    total: number
}

export interface Tracks {
    href: string,
    total: number
}

export interface PlaylistType {
    collaborative: boolean,
    description: string,
    external_urls: ExternalUrl,
    href: string,
    id: string,
    images: Image[],
    name: string,
    owner: Profile,
    primary_color: null,
    public: boolean,
    snapshot_id: string,
    tracks: Tracks,
    type: string,
    uri: string
}