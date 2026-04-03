// types/blocks.ts
export interface Block {
	id: string;
	code: string;
	name: string;
	price: number;
	description: string;
}

export interface BlockMeta {
	icon: string;
	why: string;
	label: string;
}

export interface BlockWithMeta extends Block, BlockMeta {}

export interface SVGBlockCoordinate {
	id: string;
	y: number;
	height?: number;
	group?: string; // For grouping multiple blocks in SVG
}
