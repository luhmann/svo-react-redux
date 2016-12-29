import React from 'react'
import { storiesOf } from '@kadira/storybook'

import IngredientList from './IngredientsList.jsx'

storiesOf('Organisms', module)
  .addWithInfo(
    'IngredientList',
    `
      The whole ingredient list for a recipe 
    `,
    () => {
      const ingredients = [
        {
          amount: 115,
          unit: 'g',
          label: 'Butter'
        },
        {
          amount: 170,
          unit: 'g',
          label: 'Mehl',
          _id: '571e27a0c5fa1bdd01f33e8d'
        },
        {
          amount: 70,
          unit: 'g',
          label: 'gemahlene Mandeln',
          _id: '571e27a0c5fa1bdd01f33e8c'
        },
        {
          amount: 200,
          unit: 'g',
          label: 'Zucker',
          _id: '571e27a0c5fa1bdd01f33e8b'
        },
        {
          amount: 2,
          unit: 'TL',
          label: 'Backpulver',
          _id: '571e27a0c5fa1bdd01f33e8a'
        },
        {
          amount: 0.25,
          unit: 'TL',
          label: 'Natron',
          _id: '571e27a0c5fa1bdd01f33e89'
        },
        {
          amount: 0.25,
          unit: 'TL',
          label: 'Salz',
          _id: '571e27a0c5fa1bdd01f33e88'
        },
        {
          amount: 120,
          unit: 'ml',
          label: 'Milch',
          _id: '571e27a0c5fa1bdd01f33e87'
        },
        {
          amount: 1,
          unit: 'TL',
          label: 'Vanille',
          _id: '571e27a0c5fa1bdd01f33e86'
        },
        {
          amount: 2,
          unit: null,
          label: 'große Eier',
          _id: '571e27a0c5fa1bdd01f33e85'
        },
        {
          amount: 200,
          unit: 'g',
          label: 'Rhabarber, geschält und gewürfelt',
          _id: '571e27a0c5fa1bdd01f33e84'
        },
        {
          amount: 30,
          unit: 'g',
          label: 'Mandelblättchen',
          _id: '571e27a0c5fa1bdd01f33e83'
        },
        {
          amount: null,
          unit: null,
          label: 'Puderzucker zum Bestäuben',
          _id: '571e27a0c5fa1bdd01f33e82'
        }
      ]

      return (
        <IngredientList
          ingredients={ingredients}
          servings={8}
        />
      )
    }
  )
