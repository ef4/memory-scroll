import documentScroll from '../modifiers/remember-document-scroll.ts';
import type { TemplateOnlyComponent } from '@ember/component/template-only';

const RememberDocumentScroll: TemplateOnlyComponent<{
  Element: HTMLElement;
  Args: { key: string };
  Blocks: {
    default: [];
  };
}> = <template>
  <div {{documentScroll key=@key}} ...attributes>
    {{yield}}
  </div>
</template>;

export default RememberDocumentScroll;
