import { Weather } from '../../model/Weather';
export declare class CmMainweather {
  data: string;
  weather: Weather;
  changeData(ev: CustomEvent): void;
  dropDownData(ev: CustomEvent): void;
  componentWillLoad(): void;
  changedData(): void;
  renderDate(date: Date): string;
  render(): any;
}
