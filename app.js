import redis from './client.js'

const TestRedis = async () => {
    try {
        await redis.set("firstName", "PI")
        console.log("Value set for firstName");

        const result = await redis.get("firstName")
        console.log("Value of firstName:", result);

        await redis.set("firstName", "SuperMoney")
        const updatedResult = await redis.get("firstName")
        console.log("Updated value of firstName:", updatedResult);



        // await redis.del("firstName")
        // const deletedResult = await redis.get("firstName")
        // console.log("Value after deletion (should be null):", deletedResult);

    } catch (error) {
        console.log("Error:", error)
    }
}

TestRedis()
