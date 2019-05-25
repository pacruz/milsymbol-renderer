import * as UniqueValueRenderer from 'esri/renderers/UniqueValueRenderer';
import * as Graphic from 'esri/Graphic';
import * as PictureMarkerSymbol from 'esri/symbols/PictureMarkerSymbol';
import * as ms from 'milsymbol';

interface MilSymbolRendererProperties {
  field: string
}

export class MilSymbolRenderer extends UniqueValueRenderer {
  constructor(properties: MilSymbolRendererProperties) {
    super({
      field: properties.field
    });
  }

  getUniqueValueInfo(graphic:Graphic) {
    let symbolCode = graphic.attributes[this.field];
    
    let symbol = new ms.Symbol(symbolCode, {size: 15, square: true});

    let esriSymbol = new PictureMarkerSymbol( {
      url: symbol.toDataURL(),
      width: symbol.getSize().width,
      height: symbol.getSize().height
    });
    return {
      symbol: esriSymbol
    }
  }
}
