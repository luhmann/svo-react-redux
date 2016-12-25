import React from 'react'
import styled from 'styled-components'
import { dimensions, typography } from 'styles/variables.js'

// TODO: check import size
import moment from 'moment'
import 'moment-duration-format'

import { Gauge } from 'sharedComponents/'

const Root = styled.section`
  font-family: ${typography.fonts.text};
  display: flex;
  justify-content: space-between;
  padding: 0 ${dimensions.modules.vPadding} ${dimensions.modules.marginBottom};

`

// TODO: check format of hours and minutes
// TODO: consider design for more than one hour
const Duration = ({cooking, cooling, preparation}) => (
  <Root>
    <Gauge filledPercent={ preparation / 3600 } title="Vorbereitung" label={moment.duration(preparation, 's').format('h [h], m [min]')} />
    <Gauge filledPercent={ cooking / 3600 } title="Backzeit" label={moment.duration(cooking, 's').format('h [h], m [min]')} />
    <Gauge filledPercent={ cooling / 3600 } title="Ruhezeit" label={moment.duration(cooling, 's').format('h [h], m [min]')} />
  </Root>
)

Duration.propTypes = {
  cooking: React.PropTypes.number.isRequired,
  cooling: React.PropTypes.number.isRequired,
  preparation: React.PropTypes.number.isRequired
}

export default Duration
