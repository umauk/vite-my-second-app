import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function TaskCards(props) {
    const {title=null,text,deleteTaskHandler}=props;
  return (
    <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <Button variant="primary" onClick={deleteTaskHandler}>Delete Item</Button>
      </Card.Body>
    </Card>
  );
}

export default TaskCards;