import styled from "@emotion/styled";
import {
  Box,
  Cluster,
  CornerMods,
  CursorMods,
  FlexMods,
  PaddingMods,
  PositionModFn,
  PositionMods,
} from "@kodiui/kodiui";
import { BaseBox } from "components";
import { motion } from "framer-motion";
import { useOutsideClick } from "hooks";
import React, { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { OpenMenu } from "./components";

export const Menu = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const clickOutside = useOutsideClick(ref);

  useEffect(() => {
    if (clickOutside) setOpen(false);
  }, [clickOutside]);

  return (
    <AnimatedBox
      space={4}
      modifiers={[
        PositionMods.Fixed,
        PositionModFn({ bottom: 0, left: 0 }),
        PaddingMods.Right(0),
      ]}
      animate={{ x: !open ? "-100%" : 0 }}
      initial={{ x: "-100%" }}
      ref={ref}
    >
      <Cluster alignItems={"flex-end"} gap={4}>
        <BaseBox space={4}>
          <OpenMenu />
        </BaseBox>
        <BaseBox
          onClick={() => setOpen(!open)}
          space={2}
          modifiers={[
            FlexMods.Parent({ alignItems: "center" }),
            PositionModFn({ right: "-55px" }),
            PositionMods.Absolute,
            CornerMods({ corners: 3 }),
            CursorMods.Pointer,
          ]}
        >
          {open ? (
            <FiChevronLeft strokeWidth={4} />
          ) : (
            <FiChevronRight strokeWidth={4} />
          )}
        </BaseBox>
      </Cluster>
    </AnimatedBox>
  );
};

const AnimatedBox = styled(motion(Box))``;
