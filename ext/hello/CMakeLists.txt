cmake_minimum_required(VERSION 3.4.1)

add_library(hello-world SHARED hello-world.c)

set_target_properties(hello-world PROPERTIES PUBLIC_HEADER hello-world.h)