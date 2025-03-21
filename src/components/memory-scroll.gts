import memoryScroll from '../modifiers/memory-scroll.ts';
import type { TemplateOnlyComponent } from '@ember/component/template-only';

const MemoryScroll: TemplateOnlyComponent<{
  Element: HTMLElement;
  Args: { key: string | number };
  Blocks: {
    default: [];
  };
}> = <template>
  <div {{memoryScroll key=@key}} ...attributes>
    {{yield}}
  </div>
</template>;

export default MemoryScroll;
