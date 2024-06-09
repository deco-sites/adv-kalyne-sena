import { ImageWidget } from 'apps/admin/widgets.ts';

interface Props {
  /**
   * @description The image URL for the logo.
   */
  imageUrl?: ImageWidget;
  /**
   * @description The alt text for the logo image.
   */
  altText?: string;
}

export default function Logo({ imageUrl, altText = 'Company Logo' }: Props) {
  return (
    <div class="w-25 h-25">
      <img src={imageUrl} alt={altText} class="w-full h-full object-contain" />
    </div>
  );
}