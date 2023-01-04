import { MenuItem, Select } from '@mui/material'
export default function SelectContainer({
    selectProps,
}) {
    return (
        <Select
            {...selectProps}
            native
        >
            {
                selectProps?.data?.map((item, index) => (
                    <option
                        key={index}
                        value={item[selectProps?.menuFields?.value]}
                    >
                        {item[selectProps?.menuFields?.label]}
                    </option>
                ))
            }
        </Select>
    )
}