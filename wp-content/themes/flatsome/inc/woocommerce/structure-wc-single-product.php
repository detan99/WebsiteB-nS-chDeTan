<?php

/**
 * Get HTML for ratings.
 *
 * @see wc_get_rating_html()
 */
function flatsome_get_rating_html( $rating, $count = 0 ) {
	global $product;
	$review_count = $product->get_review_count();
	$label        = sprintf( __( 'Rated %s out of 5', 'woocommerce' ), $rating ); // phpcs:ignore WordPress.WP.I18n.MissingTranslatorsComment

	$style = get_theme_mod( 'product_info_review_count_style', 'inline' );
	// Default to 'simple' when review count visibility is disabled.
	$style = get_theme_mod( 'product_info_review_count' ) ? $style : 'simple';

	if ( $rating > 0 ) {
		switch ( $style ) {
			case 'tooltip':
				$title = sprintf( _n( '%s customer review', '%s customer reviews', $review_count, 'woocommerce' ), $review_count ); // phpcs:ignore WordPress.WP.I18n.MissingTranslatorsComment
				$html  = '<a href="#reviews" class="woocommerce-review-link" rel="nofollow">';
				$html .= '<div class="star-rating tooltip" role="img" aria-label="' . esc_attr( $label ) . '" title="' . esc_attr( $title ) . '">';
				$html .= wc_get_star_rating_html( $rating, $count );
				$html .= '</div>';
				$html .= '</a>';
				break;
			case 'inline':
				$html  = '<div class="star-rating star-rating--inline" role="img" aria-label="' . esc_attr( $label ) . '">';
				$html .= wc_get_star_rating_html( $rating, $count );
				$html .= '</div>';
				break;
			case 'stacked':
				$html  = '<div class="star-rating" role="img" aria-label="' . esc_attr( $label ) . '">';
				$html .= wc_get_star_rating_html( $rating, $count );
				$html .= '</div>';
				break;
			case 'simple':
				$html  = '<a href="#reviews" class="woocommerce-review-link" rel="nofollow">';
				$html .= '<div class="star-rating" role="img" aria-label="' . esc_attr( $label ) . '">';
				$html .= wc_get_star_rating_html( $rating, $count );
				$html .= '</div>';
				$html .= '</a>';
				break;
		}
	} else {
		$html = '';
	}
	return apply_filters( 'woocommerce_product_get_rating_html', $html, $rating, $count );
}

