import Button from '../components/atoms/Button';
import { IconSearch } from '../components/atoms/icons';
import Dropdown from '../components/molecules/Dropdown';
import InputGroup from '../components/molecules/Input';

const IndexPage = () => (
  <div>
    <Button>강의신청</Button>
    <Dropdown>
      <option>전체</option>
      <option>전체2</option>
    </Dropdown>
    <InputGroup
      placeholder='검색'
      rightIcon={<IconSearch width={24} height={24} />}
    />
  </div>
);

export default IndexPage;
