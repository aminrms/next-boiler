import { Tab, Tabs } from "@mui/material";
import IconContainer from "../../template/mui/IconContainer";
export default function TabsContainer({
    tabsProps,
}) {
    return (
        <Tabs
            {...tabsProps}
            TabIndicatorProps={{
                sx: {
                    top: 0,
                }
            }}
        >
            {
                tabsProps.data?.map((tab, index) => (
                    <Tab
                        {...tabsProps.tbProps}
                        key={index}
                        label={tab[tabsProps.tbProps.title]}
                        value={tab[tabsProps.tbProps.tVal]}
                        iconPosition="top"
                        icon={
                            tabsProps.tbProps.icon ? <IconContainer
                                icoProps={{
                                    ico: tab[tabsProps.tbProps.icon],
                                    fontSize: "medium"
                                }}
                            />
                                : null}
                    />
                ))
            }
        </Tabs >
    )
}
