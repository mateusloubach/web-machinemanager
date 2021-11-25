import styled, { css } from 'styled-components'
import { ButtonProps } from '.'

// Tem o Pick e o Omit
type ContainerProps = {
  hasIcon: boolean
} & Pick<ButtonProps, 'fullWidth'>

const containerModifiers = {
  fullWidth: () => css`
    width: 100%;
  `,
  withIcon: () => css`
    svg {
      width: 1.5rem;

      & + span {
        margin-left: 1rem;
      }
    }
  `
}

export const Container = styled.button<ContainerProps>`
  ${({ fullWidth, hasIcon }) => css`
    width: 12rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    background: #1C528B;
    color: #FFF;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    padding: 0.7rem;
    text-decoration: none;

    &:hover {
      opacity: 0.6;
    }

    ${!!fullWidth && containerModifiers.fullWidth()}
    ${!!hasIcon && containerModifiers.withIcon()}
  `}
`
