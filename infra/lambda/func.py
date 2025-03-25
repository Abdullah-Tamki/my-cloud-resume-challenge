import json
import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('cloudresume-test')

def lambda_handler(event, context):
    response = table.get_item(Key={'id': '1'})
    
    # Get the current views count
    views = response['Item']['views']
    views += 1  # Increment the views count
    
    # Update the item using ExpressionAttributeNames
    table.update_item(
        Key={'id': '1'},
        UpdateExpression="SET #v = :val",
        ExpressionAttributeNames={"#v": "views"},
        ExpressionAttributeValues={":val": views}
    )
    
    return {"views": views}
