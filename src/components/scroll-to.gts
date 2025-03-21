import scrollTo from '../modifiers/scroll-to.ts';
import type { TemplateOnlyComponent } from '@ember/component/template-only';

const ScrollTo: TemplateOnlyComponent<{
  Element: HTMLElement;
  Args: { position?: number; key?: string | number | undefined };
  Blocks: {
    default: [];
  };
}> = <template>
  <div {{scrollTo key=@key position=@position}} ...attributes>
    {{yield}}
  </div>
</template>;

export default ScrollTo;
