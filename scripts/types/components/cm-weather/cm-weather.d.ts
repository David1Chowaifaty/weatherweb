import { EventEmitter } from '../../stencil-public-runtime';
import { Weather } from '../../model/Weather';
export declare class CmWeather {
  data: string;
  weather: Weather;
  dayclicked: EventEmitter<string>;
  componentWillLoad(): void;
  changedData(): void;
  handleClick(): void;
  render(): any;
}
