import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CustomDNAloader from '../loader/loader';
import InfiniteLoader from '../loader/infinite-loader';
import { CustomTodoCards } from '../Tasks/todoCards';

function CustomRectangleCard(props) {
    const {title,text}=props
  return (
    <Card >
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {<CustomTodoCards/>}
        </Card.Text>
        <InfiniteLoader/>
        <br></br>
        <CustomDNAloader height={"100"} width={"100"} visible={true} />
       
        <br></br>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default  CustomRectangleCard;