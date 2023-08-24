type PlaceType =
  | 'administrative_area_level_1'
  | 'administrative_area_level_2'
  | 'administrative_area_level_3'
  | 'administrative_area_level_4'
  | 'administrative_area_level_5'
  | 'archipelago'
  | 'colloquial_area'
  | 'continent'
  | 'country'
  | 'establishment'
  | 'finance'
  | 'floor'
  | 'food'
  | 'general_contractor'
  | 'geocode'
  | 'health'
  | 'intersection'
  | 'locality'
  | 'natural_feature'
  | 'neighborhood'
  | 'place_of_worship'
  | 'plus_code'
  | 'point_of_interest'
  | 'political'
  | 'post_box'
  | 'postal_code'
  | 'postal_code_prefix'
  | 'postal_code_suffix'
  | 'postal_town'
  | 'premise'
  | 'room'
  | 'route'
  | 'street_address'
  | 'street_number'
  | 'sublocality'
  | 'sublocality_level_1'
  | 'sublocality_level_2'
  | 'sublocality_level_3'
  | 'sublocality_level_4'
  | 'sublocality_level_5'
  | 'subpremise'
  | 'town_square';

interface MatchedSubString {
  length: number;
  offset: number;
}

interface Term {
  offset: number;
  value: string;
}

interface StructuredFormatting {
  main_text: string;
  main_text_matched_substrings: Object[][];
  secondary_text: string;
  secondary_text_matched_substrings: Object[][];
  terms: Term[];
  types: PlaceType[];
}

export interface GooglePlaceData {
  description: string;
  id: string;
  matched_substrings: MatchedSubString[];
  place_id: string;
  reference: string;
  structured_formatting: StructuredFormatting;
}
