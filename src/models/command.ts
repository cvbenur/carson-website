export default class Command {
  name: string;
  category: string;
  flags: Array<string>;
  usage: string;
  description: string;

  constructor(
    name: string,
    category: string,
    usage: string,
    description: string,
    flags: Array<string> = [],
  ) {
    this.name = name;
    this.category = category;
    this.flags = flags;
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
