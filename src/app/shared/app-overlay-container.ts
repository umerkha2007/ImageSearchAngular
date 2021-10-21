import { OverlayContainer } from '@angular/cdk/overlay';

export class AppOverlayContainer extends OverlayContainer {
  customContainerClass = 'app-overlay-container';

  /**
   * Append the OverlayContainer to the custom element
   */
  public appendToCustomContainer(element: HTMLElement): void {
    // console.log( '[appendToCustomContainer] ', element );
    console.log(element);
    if (element === null) {
      return;
    }
    
    if (!this._containerElement) {
      super._createContainer();
    }

    this._containerElement.classList.add(this.customContainerClass);
    this._containerElement.setAttribute("style", "position:relative;");
    element.appendChild(this._containerElement);
  }

  /**
   * Remove the OverlayContainer from the custom element and append it to body
   */
  public removeFromCustomContainer(): void {
    // console.log('[removeFromCustomContainer]');
    if (!this._containerElement) {
      return;
    }

    this._containerElement.classList.remove(this.customContainerClass);
    this._document.body.appendChild(this._containerElement);
  }

}