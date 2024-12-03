type TagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'

type VariantType =
    | 'display'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subheadline'
    | 'body1'
    | 'body2'
    | 'caption1'
    | 'caption2'

interface TextProps {
    tag?: TagType
    variant?: VariantType
    weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
}

export { TagType, TextProps, VariantType }
