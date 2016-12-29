import React from 'react'
import { storiesOf } from '@kadira/storybook'

import Preparation from './Preparation.jsx'

storiesOf('Organisms', module)
    .addWithInfo(
        'Preparation',
        `
      The list of steps needed to prepare the dish 
    `,
        () => {
          const preparation = [{
            step: 1,
            description: 'Die Butter in einer kleinen Casserole bei mittlerer Hitze schmelzen und dann unter Rühren aufkochen bis sie braun wird. Beiseite stellen',
            _id: '571e27a0c5fa1bdd01f33e80',
            ingredients: [{
              amount: 115,
              unit: 'g',
              label: 'Butter',
              _id: '571e27a0c5fa1bdd01f33e81'
            }]
          }, {
            step: 2,
            description: 'Den Ofen auf 175°C vorheizen. Eine 24cm große Sprinform buttern und mehlen.',
            _id: '571e27a0c5fa1bdd01f33e7f',
            ingredients: []
          }, {
            step: 3,
            description: 'In einer großen Schüssel das Mehl, die gemahlenen Mandeln, den Zucker, das Backpulver, das Natron und das Salz miteinander verrühren.',
            _id: '571e27a0c5fa1bdd01f33e78',
            ingredients: [{
              amount: 170,
              unit: 'g',
              label: 'Mehl',
              _id: '571e27a0c5fa1bdd01f33e7e'
            }, {
              amount: 70,
              unit: 'g',
              label: 'gemahlene Mandeln',
              _id: '571e27a0c5fa1bdd01f33e7d'
            }, {
              amount: 200,
              unit: 'g',
              label: 'Zucker',
              _id: '571e27a0c5fa1bdd01f33e7c'
            }, {
              amount: 2,
              unit: 'TL',
              label: 'Backpulver',
              _id: '571e27a0c5fa1bdd01f33e7b'
            }, {
              amount: 0.25,
              unit: 'TL',
              label: 'Natron',
              _id: '571e27a0c5fa1bdd01f33e7a'
            }, {
              amount: 0.25,
              unit: 'TL',
              label: 'Salz',
              _id: '571e27a0c5fa1bdd01f33e79'
            }]
          }, {
            step: 4,
            description: 'In einer mittleren Schüssel die Milch, die Eier, die Vanille und die gebräunte Butter miteinander vermischen.',
            _id: '571e27a0c5fa1bdd01f33e73',
            ingredients: [{
              amount: 120,
              unit: 'ml',
              label: 'Milch',
              _id: '571e27a0c5fa1bdd01f33e77'
            }, {
              amount: 1,
              unit: 'TL',
              label: 'Vanille',
              _id: '571e27a0c5fa1bdd01f33e76'
            }, {
              amount: 2,
              unit: null,
              label: 'große Eier',
              _id: '571e27a0c5fa1bdd01f33e75'
            }, {
              amount: null,
              unit: null,
              label: 'gebräunte Butter',
              _id: '571e27a0c5fa1bdd01f33e74'
            }]
          }, {
            step: 5,
            description: 'Die feuchten Zutaten zu den trockenen Zutaten geben und unterheben. Dann den geschälten und kleingeschnittenen Rhabarber zugeben.',
            _id: '571e27a0c5fa1bdd01f33e71',
            ingredients: [{
              amount: 200,
              unit: 'g',
              label: 'Rhabarber, geschält und gewürfelt',
              _id: '571e27a0c5fa1bdd01f33e72'
            }]
          }, {
            step: 6,
            description: 'Den Kuchenteig in die vorbereitete Springform geben und mit den Mandelblättchen bestreuen. Den Kuchen für 30-35min backen. Stäbchenprobe machen.',
            _id: '571e27a0c5fa1bdd01f33e6f',
            ingredients: [{
              amount: 30,
              unit: 'g',
              label: 'Mandelblättchen',
              _id: '571e27a0c5fa1bdd01f33e70'
            }]
          }, {
            step: 7,
            description: 'Den Kuchen 10 Minuten abkühlen lassen. Vor dem Servieren mit Puderzucker bestreuen.',
            _id: '571e27a0c5fa1bdd01f33e6d',
            ingredients: [{
              amount: null,
              unit: null,
              label: 'Puderzucker',
              _id: '571e27a0c5fa1bdd01f33e6e'
            }]
          }]
          
          return (
            <Preparation preparation = { preparation } />
          )
        }
    )
