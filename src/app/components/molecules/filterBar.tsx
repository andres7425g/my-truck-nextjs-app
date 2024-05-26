import { Dispatch, FC, SetStateAction } from 'react';
import { facilityTypeConstant } from '@/app/constants/facilityType.constant';
import { statusConstant } from '@/app/constants/status.constant';
import DropdownSelector from '@/atoms/dropDown';
import InputSearch from '@/atoms/inputSeatch';

interface FilterBarProps {
  facilityType: string;
  setFacilityType: Dispatch<SetStateAction<string>>;
  status: string;
  setStatus: Dispatch<SetStateAction<string>>;
  onSearch: (value: string) => void;
}

const FilterBar: FC<FilterBarProps> = ({
  facilityType,
  setFacilityType,
  status,
  setStatus,
  onSearch,
}) => {
  return (
    <div>
      <div className="flex flex-row">
        <DropdownSelector
          options={facilityTypeConstant}
          label={'Facility Type'}
          initialOption={facilityType}
          setSelection={setFacilityType}
        />
        <DropdownSelector
          options={statusConstant}
          label={'Status'}
          initialOption={status}
          setSelection={setStatus}
        />
        <InputSearch onSearch={onSearch} />
      </div>
    </div>
  );
};

export default FilterBar;
