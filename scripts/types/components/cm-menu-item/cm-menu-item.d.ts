import { EventEmitter } from '../../stencil-public-runtime';
import { Weather } from '../../model/Weather';
export declare class CmMenuItem {
  data: string;
  weather: Weather;
  itemClicked: EventEmitter<string>;
  componentWillLoad(): void;
  changedData(): void;
  handleClick(): void;
  render(): any;
}
