import { css, Global } from "@emotion/react";
import {
  BorderMods,
  ColorMods,
  CornerMods,
  CursorMods,
  FlexMods,
  ifHovered,
  Opacity,
  PaddingMods,
  SizeMods,
  TextMods,
} from "@kodiui/kodiui";
import { theme } from "./theme";

const normalizeButton = css`
  ${BorderMods.None}
  ${ColorMods({ background: "none" })}
  ${CursorMods.Pointer}
  transition: ${theme.transition.base}
`;

const arrowStyle = css`
  ${ColorMods({ color: theme.color.red })};
  ${Opacity(0.4)};
  ${TextMods({ fontSize: "1.8rem" })}
  ${PaddingMods.Ends(5)}
  ${PaddingMods.Sides(5)}
  ${ifHovered(Opacity(1))}
`;

const reactCalendarCss = css`
  .react-calendar {
    ${FlexMods.Parent({ direction: "column", gap: 5 })}
    button {
      ${normalizeButton}
    }
    .react-calendar__navigation__prev2-button {
      display: none;
    }
    .react-calendar__navigation__next2-button {
      display: none;
    }
    /* Navigation Parent  */
    .react-calendar__navigation {
      ${FlexMods.Parent({ justifyContent: "space-between" })}
    }
    /* Left month button */
    .react-calendar__navigation__prev-button {
      ${arrowStyle}
    }
    /* Month button  */
    .react-calendar__navigation__label {
      ${ColorMods({ color: theme.color.red })}
    }
    /* Right month button */
    .react-calendar__navigation__next-button {
      ${arrowStyle}
    }

    /* Days in week bar */
    .react-calendar__month-view__weekdays {
      ${PaddingMods.Bottom(3)}
      abbr {
        ${TextMods({ textDecoration: "none", textAlign: "center" })}
        ${ColorMods({ color: theme.color.red })}
      }
      ${TextMods({ textAlign: "center" })}
    }
    /* days in calendar insdie  */
    .react-calendar__month-view__days {
      button {
        height: 44px;
      }
    }

    /* today */
    .react-calendar__tile--now {
      ${ColorMods({ color: theme.color.red })}
    }
    /* active date */
    .react-calendar__tile--active {
      ${ColorMods({
        background: theme.color.yellow,
        color: theme.color.white,
      })}
      ${CornerMods({ corners: 999 })}
    }
    .react-calendar__tile {
      ${SizeMods({ height: "34px" })}
    }
  }
`;

export const ReactCalendarStyle = () => {
  return <Global styles={reactCalendarCss} />;
};
