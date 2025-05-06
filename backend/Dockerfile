FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

COPY ["RecipeManager/RecipeManager.csproj", "RecipeManager/"]
RUN dotnet restore "RecipeManager/RecipeManager.csproj"

COPY . .
WORKDIR "/src/RecipeManager"
RUN dotnet build "RecipeManager.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "RecipeManager.csproj" -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "RecipeManager.dll"]