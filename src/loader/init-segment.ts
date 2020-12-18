import Fragment from './fragment';

export default class InitSegment {
  public fragment: Fragment;
  public data: Uint8Array | null = null;

  constructor (fragment: Fragment) {
    this.fragment = fragment;
  }
}
