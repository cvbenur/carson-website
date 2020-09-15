export default class Command {
  name: string;
  category: string;
  args: Array<string>;
  usage: string;
  description: string;

  constructor(
    name: string,
    category: string,
    usage: string,
    description: string,
    args: Array<string> = [],
  ) {
    this.name = name;
    this.category = category;
    this.args = args;
    this.usage = usage;
    this.description = description;
  }
}

export enum Categories {
  All = 'All',
  Settings = 'Settings',
  Info = 'Info',
  Stats = 'Stats',
}
