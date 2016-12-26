import styled from 'styled-components'
import { colors, dimensions, typography } from './variables.js'

export const Center = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`

export const ListBox = styled.section`
  background-color: ${colors.white};
  border-radius: ${dimensions.borderRadius};
  margin: 0 ${dimensions.modules.vPadding} ${dimensions.modules.marginBottom};
  padding: 10px 16px;
`

export const ListBoxHeader = styled.header`
  border-bottom: 1px solid ${colors.background};
  color: ${colors.text};
  font-size: 1.5em;
  font-family: ${typography.fonts.text};
  font-weight: 600;
  margin-bottom: 11px;
  padding-bottom: 2px;
`

export const ListBoxItem = styled.div`
  display: flex;
  font-famiy: ${typography.fonts.text};
  margin-bottom: 13px;
`

export const ListBoxItemLeft = styled.span`
  border-right: 1px solid ${colors.background};
  display: inline-block;
  font-weight: 500;
  min-width: 54px;
  padding: 4px 6px 0;
  text-alig: right;
`

export const ListBoxItemRight = styled.span`
  border-right: 1px solid ${colors.background};
  flex-grow: 1;
  display: inline-block;
  margin-left: 7px;
  padding: 4px 0;
`
