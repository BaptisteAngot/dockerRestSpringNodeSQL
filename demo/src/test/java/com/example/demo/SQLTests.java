package com.example.demo;

import java.sql.Connection;
import java.sql.DriverManager;

public class SQLTests {
    public static void main(String [] args) throws Exception {
        // Class.forName( "com.mysql.jdbc.Driver" ); // do this in init
        // // edit the jdbc url
        Connection conn = DriverManager.getConnection(
                "jdbc:mysql://localhost:3308/testapp?user=root&password=helloworld");
        // Statement st = conn.createStatement();
        // ResultSet rs = st.executeQuery( "select * from table" );

        System.out.println("Connected?");
    }
}
