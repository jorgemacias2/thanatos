from fastapi import APIRouter, HTTPException

router = APIRouter()


@router.get("/")
async def read_users():
    return [{"name": "User Foo"}, {"name": "user Bar"}]


@router.get("/{user_id}")
async def read_user(user_id: str):
    return {"name": "Fake Specific User", "user_id": user_id}


@router.put(
    "/{user_id}",
    tags=["custom"],
    responses={403: {"description": "Operation forbidden"}},
)
async def update_user(user_id: str):
    if user_id != "foo":
        raise HTTPException(status_code=403, detail="You can only update the user: foo")
    return {"user_id": user_id, "name": "The Fighters"}
