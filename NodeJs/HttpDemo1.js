const https = require('https');

https.get('https://encrypted.google.com/', (res) => {
  console.log('statusCode: ', res.statusCode);
  console.log('headers: ', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });

}).on('error', (e) => {
  console.error(e);
}); <ContentPage.Resources>
    <ResourceDictionary>
      <Style x:Key="baseStyle" TargetType="View">
        <Setter Property="HorizontalOptions" Value="Center" />
        <Setter Property="VerticalOptions" Value="CenterAndExpand"/>
        <Setter Property="BackgroundColor" Value="#FFFFFF"/>
      </Style>
      <Style x:Key="labelStyle" TargetType="Label">
        <Setter Property="FontSize" Value="Medium"></Setter>
        <Setter Property="TextColor" Value="#949494"></Setter>
      </Style>
      <Style x:Key="editorStyle" TargetType="Editor">
        <Setter Property="HeightRequest" Value="50"/>
        <Setter Property="TextColor" Value="#A5A5A5"/>
        <Setter Property="BackgroundColor" Value="White"/>
      </Style>
      <Style x:Key="buttonSeleted" TargetType="Button">
        <Setter Property="BackgroundColor" Value="#00CCCC"></Setter>
        <Setter Property="HeightRequest" Value="40"></Setter>
      </Style>
      <Style x:Key="buttonUnseleted" TargetType="Button">
        <Setter Property="BackgroundColor" Value="#E5E5E5"></Setter>
        <Setter Property="HeightRequest" Value="40"></Setter>
      </Style>
    </ResourceDictionary>
  </ContentPage.Resources>
  <ContentPage.Content Style="{StaticResource baseStyle}">
    <StackLayout Padding="15, 30, 15, 10" BackgroundColor="#FFFFFF">
      <Label Text="{Binding Title}" Style="{StaticResource labelStyle}"/>
      <optionTemplate:TextAndTextBox BindingContext="{Binding Options[0]}"/>
      <optionTemplate:TextAndTextBox BindingContext="{Binding Options[1]}"/>
      <Grid>
        <Grid.ColumnDefinitions>
          <ColumnDefinition Width="5*"></ColumnDefinition>
          <ColumnDefinition Width="5*"></ColumnDefinition>
        </Grid.ColumnDefinitions>
        <Grid.RowDefinitions>
          <RowDefinition Height="*" />
        </Grid.RowDefinitions>
        <ContentView Grid.Column="0" Grid.Row="1" Padding="40,35,40,0">
          <Button x:Name="prevButton"  Text="Prev" Style="{StaticResource buttonUnseleted}" Clicked="OnPrev"></Button>
        </ContentView>
        <ContentView Grid.Column="1" Grid.Row="1" Padding="40,35,40,0">
          <Button x:Name="nextButton" Text="NEXT" Style="{StaticResource buttonSeleted}"  Clicked="OnNext"></Button>
        </ContentView>
      </Grid>
    </StackLayout>
  </ContentPage.Content>
  
</ContentPage>