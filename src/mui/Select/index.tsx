import { useClassNames, useStyle, type SxProps } from "../../common/theme";
import TextField, { type TextFieldProps } from "../TextField";
import {
  cloneElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type RefObject,
} from "react";
import ArrowDown from "@material-design-icons/svg/filled/arrow_drop_down.svg";
import { List, ListItemButton, ListItemText, type ListProps } from "../List";
import Box, { type BoxProps } from "../Box";
import { type JSX } from "react";
import { useMuiRef, type SlotProps } from "../../common/utils";

export type SelectProps = {
  value?: string;
  name: string;
  onSelect?: (value: string, option: JSX.Element) => void;
  defaultValue?: string;
  children: JSX.Element[] | JSX.Element;
  SlotProps?: SlotProps<{
    "dropdown-wrapper": BoxProps<HTMLDivElement>;
    "dropdown-list": ListProps;
    "end-icon": React.SVGProps<SVGSVGElement>;
  }>;
  formatName?: (value: string | JSX.Element) => string;
  sx?: SxProps;
  ref?: RefObject<HTMLInputElement>;
} & Omit<TextFieldProps, "value" | "onSelect">;

function Select({
  sx,
  className,
  value,
  defaultValue,
  children,
  onSelect,
  SlotProps,
  name,
  formatName,
  ref,
  ...props
}: SelectProps) {
  if (!Array.isArray(children)) children = [children] as any;
  const _style = useStyle(sx);
  const DefaultValueMemo = useMemo(() => {
    if (defaultValue) {
      const option = (children as JSX.Element[]).find(
        (e) => e.props?.value == defaultValue
      );
      if (formatName && option) return formatName(option);
      else
        return (
          (option?.props?.value as string | undefined) ??
          (option?.props?.children as string | undefined) ??
          ""
        );
    }
    return "";
  }, [defaultValue]);

  const [_value, setValue] = useState(defaultValue || "");
  const [displayedValue, setDisplayedValue] =
    useState<string>(DefaultValueMemo);
  useEffect(() => {
    setDisplayedValue(DefaultValueMemo);
  }, [defaultValue]);

  const root = useClassNames({
    component_name: "Select_Root",
    className,
  });

  const dropDown = useClassNames({
    component_name: "Select_DropDown_Root",
    className: SlotProps?.["dropdown-wrapper"]?.className,
  });

  const select = useClassNames({
    component_name: "Select_Input",
  });

  const OnSelectHandler = useCallback(
    onSelect
      ? (child: JSX.Element, index: number) => {
          onSelect(child.props?.value || index, child);
          if (!value) {
            setDisplayedValue(
              formatName ? formatName(child) : child.props?.children
            );
            setValue(child.props?.value);
          } else {
          }
        }
      : (child: JSX.Element, index: number) => {
          const newValue = child.props?.value as string;
          setDisplayedValue(
            formatName ? formatName(child) : child.props?.children
          );
          setValue(newValue);
        },
    [onSelect]
  );

  if (value && _value != value) {
    setValue(value);
    setDisplayedValue(() => {
      for (const child of children as JSX.Element[]) {
        if (child.props?.value != value) continue;
        return formatName
          ? formatName(child)
          : child.props?.value ?? child.props.children;
      }
    });
  }

  const startIconRef = useMuiRef<HTMLSpanElement>(
    SlotProps?.startIconWrapper?.ref
  );
  const fieldRef = useMuiRef<HTMLInputElement>(ref);

  useEffect(() => {
    const ctrl = new AbortController();
    startIconRef?.current?.addEventListener(
      "click",
      () => {
        fieldRef.current?.focus();
      },
      { signal: ctrl.signal }
    );

    return () => ctrl.abort();
  }, [startIconRef, fieldRef]);

  return (
    <div style={_style.styleFromSx} className={root.combined}>
      <TextField
        SlotProps={{
          startIconWrapper: {
            ref: startIconRef,
          },
        }}
        value={displayedValue || DefaultValueMemo}
        endIcon={
          <ArrowDown
            {...SlotProps?.["end-icon"]}
            className={[
              "MUI_Select_DropDown_Arrow",
              SlotProps?.["end-icon"]?.className,
            ].join(" ")}
          />
        }
        className={select.combined}
        sx={sx}
        readOnly
        {...props}
        ref={fieldRef}
      />
      <Box {...SlotProps?.["dropdown-wrapper"]} className={dropDown.combined}>
        <List
          {...SlotProps?.["dropdown-list"]}
          className={[
            "overflow-auto",
            SlotProps?.["dropdown-list"]?.className,
          ].join(" ")}
          disablePadding
        >
          {(children as Array<JSX.Element>).map((child, index) => {
            return (
              <ListItemButton
                e-value={child.props.value}
                key={index}
                onClick={(ev) => {
                  OnSelectHandler(child, index);
                  ev.currentTarget.blur();
                }}
                className={
                  (displayedValue || DefaultValueMemo) == child.props?.value
                    ? "selected"
                    : ""
                }
              >
                {typeof child.props.children == "string" ? (
                  <ListItemText primary={child?.props?.children} />
                ) : (
                  child?.props?.children
                )}
              </ListItemButton>
            );
          })}
        </List>
      </Box>
      <input name={name} type="hidden" value={_value} />
    </div>
  );
}

export default Select;
