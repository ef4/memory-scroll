import Service from '@ember/service';

export default class MemoryScrollService extends Service {
  memory = new Map<string | number, number>();
}
