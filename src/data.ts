/**
 * Reused from https://github.com/akveo/react-native-ui-kitten
 * The MIT License (MIT)
 *
 * Copyright (c) 2016 akveo.com
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import {ImageSourcePropType} from 'react-native';

export class Product {
  constructor(
    readonly title: string,
    readonly description: string,
    readonly price: ProductPrice,
    readonly primaryImage: ImageSourcePropType,
    readonly images: ImageSourcePropType[],
    readonly details: string[],
    readonly options: ProductOption[],
  ) {}

  static centralParkApartment(): Product {
    return new Product(
      'Private Rooms with Central Park View',
      'The apartment consists of 2 separate bedrooms, 1 bathroom with a hair dryer. A flat-screen TV and Blu-ray player are available.\n' +
        '\n' +
        'Rodin Museum is 4.2 km from the apartment, while Orsay Museum is 5 km away. The nearest airport is Paris - Orly Airport, 13 km from the property.',
      ProductPrice.tenDollarsPerNight(),
      require('./image.jpg'),
      [require('./image.jpg'), require('./image.jpg'), require('./image.jpg')],
      ['2 Guests', '2 Bad', '2 Bath'],
      [
        ProductOption.wifiOption(),
        ProductOption.tvOption(),
        ProductOption.parkingOption(),
      ],
    );
  }
}

export class ProductPrice {
  constructor(
    readonly value: number,
    readonly currency: string,
    readonly scale: string,
  ) {}

  get formattedValue(): string {
    return `${this.currency}${this.value}`;
  }

  get formattedScale(): string {
    return `/${this.scale}`;
  }

  static tenDollarsPerNight(): ProductPrice {
    return new ProductPrice(10, '$', 'night');
  }
}

export class ProductOption {
  constructor(readonly icon: string, readonly title: string) {}

  static wifiOption(): ProductOption {
    return new ProductOption('wifi', 'Wi-Fi');
  }

  static tvOption(): ProductOption {
    return new ProductOption('tv', 'TV');
  }

  static parkingOption(): ProductOption {
    return new ProductOption('car', 'Free Parking');
  }
}
