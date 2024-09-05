import {
	compose,
	border,
	boxShadow,
	color,
	flexbox,
	layout,
	position,
	space,
	typography,
} from 'styled-system'

export const display = compose(space, layout, flexbox, position)

export const decoration = compose(
	border,
	boxShadow,
	color,
	layout,
	typography
)